// Zero-latency Audio Pool Utility for Tactile UI Sounds
const POOL_SIZE = 6;
let clickAudioPool = [];
let poolIndex = 0;

if (typeof window !== 'undefined') {
  for (let i = 0; i < POOL_SIZE; i++) {
    try {
      const audio = new Audio('/click-sound.wav');
      audio.volume = 0.4;
      audio.preload = 'auto';
      clickAudioPool.push(audio);
    } catch (e) {
      console.warn('Audio pool initialization:', e);
    }
  }
}

export const playClickSound = () => {
  try {
    if (!clickAudioPool.length) return;
    const audio = clickAudioPool[poolIndex];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch(() => {
        // Suppress browser autoplay policy warnings
      });
      poolIndex = (poolIndex + 1) % POOL_SIZE;
    }
  } catch (err) {
    // Ignore audio playback errors
  }
};
