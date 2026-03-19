const quotes = [
  { cn: "人咸知修其容，莫知饰其性。", en: "Everyone knows how to adorn their face, but few know how to cultivate their soul.", author: "Gu Kaizhi / 顾恺之" },
  { cn: "镜子里的不是你，而是你希望成为的那个人。", en: "It is not you in the mirror, but the person you wish to become.", author: "Pablo Picasso / 毕加索" },
  { cn: "未经审视的人生，是不值得过的。", en: "The unexamined life is not worth living.", author: "Socrates / 苏格拉底" },
  { cn: "当你注视屏幕时，算法也在注视着你。", en: "As you gaze into the screen, the algorithm gazes back at you.", author: "Adrian Ghenie / 阿德里安·格尼" },
  { cn: "自我在镜像中诞生，也在镜像中迷失。", en: "The ego is born in the mirror image, yet lost within it.", author: "Jacques Lacan / 拉康" },
  { cn: "镜子使人的数目倍增，却稀释了真实的重量。", en: "Mirrors multiply the number of men, but dilute the weight of reality.", author: "J.L. Borges / 博尔赫斯" },
  { cn: "这不仅仅是你的脸，这更是像素的排列。", en: "This is not just your face; it is an arrangement of pixels.", author: "Modern Reflection / 现代启示" },
  { cn: "拟像比真实更真实，滤镜比灵魂更动人。", en: "The simulacrum is truer than the truth; the filter is more moving than the soul.", author: "Jean Baudrillard / 鲍德里亚" },
  { cn: "你的屏幕不是窗户，而是一面吞噬时间的镜子。", en: "Your screen is not a window, but a mirror that devours time.", author: "A.I. Thought / 时代思辨" },
  { cn: "在玻璃与像素之间，哪一个才是真实的你？", en: "Between glass and pixels, which one is the real you?", author: "Curator's Note / 展览结语" }
];

const overlay = document.getElementById('mirror-overlay');
const quoteScreen = document.getElementById('quote-screen');
const timerEl = document.getElementById('timer');
const breakBtn = document.getElementById('break-btn');

let timeLeft = 5;

// 1. 启动倒计时
const countdown = setInterval(() => {
  timeLeft--;
  timerEl.innerText = timeLeft;
  if (timeLeft <= 0) {
    clearInterval(countdown);
    timerEl.classList.add('hidden');
    breakBtn.classList.remove('hidden');
  }
}, 1000);

// 2. 点击打破镜面逻辑
breakBtn.addEventListener('click', () => {
  // 随机选语录
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote-cn').innerText = randomQuote.cn;
  document.getElementById('quote-en').innerText = randomQuote.en;
  document.getElementById('author').innerText = `— ${randomQuote.author} —`;

  // 切换转场效果
  overlay.classList.add('hidden');
  quoteScreen.classList.add('visible');
});
// 3. 再次体验（修复 CodePen 报错版本）
document.getElementById('retry-btn').addEventListener('click', () => {
  // 不使用 location.reload()，而是手动重置状态
  timeLeft = 5;
  timerEl.innerText = timeLeft;
  timerEl.classList.remove('hidden');
  breakBtn.classList.add('hidden');
  
  overlay.classList.remove('hidden');
  quoteScreen.classList.remove('visible');
  
  // 重新启动倒计时
  startCountdown(); 
});

// 为了让重置逻辑生效，我们需要把之前的倒计时封装成一个函数
function startCountdown() {
  const countdown = setInterval(() => {
    timeLeft--;
    timerEl.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timerEl.classList.add('hidden');
      breakBtn.classList.remove('hidden');
    }
  }, 1000);
}

// 页面第一次加载时启动
startCountdown();