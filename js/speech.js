// ============================================================
// speech.js — Web Speech API ses girişi
// ============================================================

const SpeechInput = {
  recognition: null,
  isListening: false,
  targetInput: null,
  onResult: null,

  isSupported() {
    return 'webkitSpeechRecognition' in window || 'SpeechRecognition' in window;
  },

  init(inputId, btnId, onResultCallback) {
    this.targetInput = document.getElementById(inputId);
    const btn = document.getElementById(btnId);
    this.onResult = onResultCallback || null;

    if (!this.isSupported()) {
      if (btn) {
        btn.title = 'Tarayıcınız ses girişini desteklemiyor';
        btn.classList.add('opacity-40', 'cursor-not-allowed');
        btn.disabled = true;
      }
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    this.recognition = new SpeechRecognition();
    this.recognition.lang = 'tr-TR';
    this.recognition.continuous = false;
    this.recognition.interimResults = true;
    this.recognition.maxAlternatives = 1;

    this.recognition.onstart = () => {
      this.isListening = true;
      if (btn) {
        btn.classList.add('bg-red-500', 'text-white', 'animate-pulse');
        btn.classList.remove('text-gray-400', 'hover:text-blue-600');
        btn.title = 'Dinleniyor... (tıkla durdur)';
      }
      showToast('🎤 Dinleniyor... Türkçe konuşabilirsiniz', 'info');
    };

    this.recognition.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      if (this.targetInput) {
        this.targetInput.value = transcript;
      }
      if (event.results[event.results.length - 1].isFinal) {
        if (this.onResult) this.onResult(transcript);
      }
    };

    this.recognition.onerror = (event) => {
      this.isListening = false;
      this.resetBtn(btn);
      const errorMessages = {
        'not-allowed': 'Mikrofon izni reddedildi. Tarayıcı ayarlarından mikrofon iznini açın.',
        'no-speech': 'Ses algılanamadı. Tekrar deneyin.',
        'audio-capture': 'Mikrofon bulunamadı veya erişilemiyor.',
        'network': 'Ağ hatası. İnternet bağlantınızı kontrol edin.',
        'aborted': 'Ses girişi iptal edildi.'
      };
      const msg = errorMessages[event.error] || `Ses girişi hatası: ${event.error}`;
      showToast(msg, 'error');
    };

    this.recognition.onend = () => {
      this.isListening = false;
      this.resetBtn(btn);
    };

    if (btn) {
      btn.addEventListener('click', () => this.toggle());
    }
  },

  toggle() {
    if (!this.recognition) return;
    if (this.isListening) {
      this.recognition.stop();
    } else {
      try {
        this.recognition.start();
      } catch (e) {
        showToast('Ses girişi başlatılamadı. Sayfayı yenileyin.', 'error');
      }
    }
  },

  stop() {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
  },

  resetBtn(btn) {
    if (btn) {
      btn.classList.remove('bg-red-500', 'text-white', 'animate-pulse');
      btn.classList.add('text-gray-400', 'hover:text-blue-600');
      btn.title = 'Sesli not gir (Türkçe)';
    }
  }
};
