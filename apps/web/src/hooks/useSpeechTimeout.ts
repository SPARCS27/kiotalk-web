import { useCallback, useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const useSpeechTimeout = (timeoutDuration: number, onSuccessComplete: () => void) => {
  const {
    transcript,
    listening,
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const clearListeningTimeout = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
  }, [timeoutId]);

  const setListeningTimeout = useCallback(() => {
    clearListeningTimeout();
    const newTimeoutId = setTimeout(async () => {
      await SpeechRecognition.stopListening();
    }, timeoutDuration);
    setTimeoutId(newTimeoutId);
  }, [clearListeningTimeout, timeoutDuration]);

  const handleVoice = async () => {
    if (listening) {
      clearListeningTimeout();
      await SpeechRecognition.abortListening();
    } else {
      await SpeechRecognition.startListening({ language: 'ko', continuous: true });
    }
  };

  useEffect(() => {
    if (listening) {
      setListeningTimeout();
    } else {
      clearListeningTimeout();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, listening]);

  useEffect(() => {
    if (!listening && finalTranscript) onSuccessComplete();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalTranscript, listening]);

  useEffect(() => {
    return () => clearListeningTimeout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    transcript: transcript,
    listening,
    finalTranscript: transcript,
    handleVoice,
    resetTranscript,
    browserSupportsSpeechRecognition,
  };
};

export default useSpeechTimeout;
