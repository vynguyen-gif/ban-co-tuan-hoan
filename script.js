// BÀN CỜ TUẦN HOÀN - JAVASCRIPT ĐIỀU HÀNH
// Tác giả: Nguyễn Vỹ & Lê Đình Lục - THPT Bùi Thị Xuân - Mũi Né

// 1. DATA: 24 Ô ĐƯỜNG ĐUA NGUYÊN TỐ
const boardTilesData = [
  { id: 1, symbol: "H", name: "Hydrogen", z: 1, type: "start", label: "Xuất phát", xp: 0, color: "slate" },
  { id: 2, symbol: "He", name: "Helium", z: 2, type: "normal", label: "Khí hiếm", xp: 5, color: "slate" },
  { id: 3, symbol: "Li", name: "Lithium", z: 3, type: "card10", label: "Thử thách 10 XP", xp: 10, color: "emerald" },
  { id: 4, symbol: "Be", name: "Beryllium", z: 4, type: "normal", label: "Kim loại kiềm thổ", xp: 5, color: "slate" },
  { id: 5, symbol: "B", name: "Boron", z: 5, type: "card10", label: "Thử thách 10 XP", xp: 10, color: "emerald" },
  { id: 6, symbol: "C", name: "Carbon", z: 6, type: "lucky", label: "🎁 May Mắn +15XP", xp: 15, color: "purple" },
  { id: 7, symbol: "N", name: "Nitrogen", z: 7, type: "card10", label: "Thử thách 10 XP", xp: 10, color: "emerald" },
  { id: 8, symbol: "O", name: "Oxygen", z: 8, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 9, symbol: "F", name: "Fluorine", z: 9, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 10, symbol: "Ne", name: "Neon", z: 10, type: "skip", label: "⚠️ Mất Lượt", xp: 0, color: "rose" },
  { id: 11, symbol: "Na", name: "Sodium", z: 11, type: "card10", label: "Thử thách 10 XP", xp: 10, color: "emerald" },
  { id: 12, symbol: "Mg", name: "Magnesium", z: 12, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 13, symbol: "Al", name: "Aluminium", z: 13, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 14, symbol: "Si", name: "Silicon", z: 14, type: "lucky", label: "🎁 May Mắn +15XP", xp: 15, color: "purple" },
  { id: 15, symbol: "P", name: "Phosphorus", z: 15, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 16, symbol: "S", name: "Sulfur", z: 16, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 17, symbol: "Cl", name: "Chlorine", z: 17, type: "card30", label: "Thử thách 30 XP", xp: 30, color: "rose" },
  { id: 18, symbol: "Ar", name: "Argon", z: 18, type: "normal", label: "Khí trơ", xp: 5, color: "slate" },
  { id: 19, symbol: "K", name: "Potassium", z: 19, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 20, symbol: "Ca", name: "Calcium", z: 20, type: "card30", label: "Thử thách 30 XP", xp: 30, color: "rose" },
  { id: 21, symbol: "Sc", name: "Scandium", z: 21, type: "card20", label: "Thử thách 20 XP", xp: 20, color: "amber" },
  { id: 22, symbol: "Ti", name: "Titanium", z: 22, type: "lucky", label: "🎁 Nhân Đôi Lượt", xp: 20, color: "purple" },
  { id: 23, symbol: "V", name: "Vanadium", z: 23, type: "card30", label: "Thử thách 30 XP", xp: 30, color: "rose" },
  { id: 24, symbol: "🏁", name: "VỀ ĐÍCH", z: 24, type: "finish", label: "🏆 Về Đích (+50XP)", xp: 50, color: "amber" }
];

// 2. NGÂN HÀNG CÂU HỎI THỬ THÁCH (CHALLENGE CARDS)
const questionsBank = {
  10: [
    {
      q: "Nguyên tử nguyên tố X có Z = 11. Hãy viết cấu hình electron của X và xác định vị trí (ô, chu kỳ, nhóm) của X trong bảng tuần hoàn.",
      hint: "Cấu hình e: 1s² 2s² 2p⁶ 3s¹. Ô số 11 (do Z = 11), Chu kỳ 3 (3 lớp e), Nhóm IA (1 e hóa trị lớp ngoài cùng). Là kim loại Sodium (Na)."
    },
    {
      q: "Nguyên tử nguyên tố Y có cấu hình electron lớp ngoài cùng là 3s² 3p¹. Cho biết vị trí của Y trong bảng tuần hoàn và Y là kim loại hay phi kim?",
      hint: "Cấu hình đầy đủ: 1s² 2s² 2p⁶ 3s² 3p¹ (Z = 13). Vị trí: Ô 13, Chu kỳ 3, Nhóm IIIA. Là kim loại Nhôm (Aluminium)."
    },
    {
      q: "Cho các nguyên tố: ₃Li, ₁₁Na, ₁₉K. Hãy cho biết các nguyên tố này thuộc cùng một chu kỳ hay cùng một nhóm? Nêu tên nhóm đó.",
      hint: "Cùng thuộc nhóm IA (Nhóm kim loại kiềm), vì đều có 1 electron ở lớp ngoài cùng (ns¹)."
    },
    {
      q: "Nguyên tử Chlorine có Z = 17. Cho biết số electron lớp ngoài cùng của Chlorine và Chlorine có xu hướng nhường hay nhận bao nhiêu electron để đạt cấu hình bền?",
      hint: "Cấu hình e: [Ne] 3s² 3p⁵ -> Có 7 electron lớp ngoài cùng. Xu hướng: Nhận thêm 1 electron để đạt 8 electron bền vững (Quy tắc Octet)."
    }
  ],
  20: [
    {
      q: "Dựa vào điện tích hạt nhân và cấu hình electron, hãy so sánh bán kính nguyên tử giữa Sodium (₁₁Na) và Chlorine (₁₇Cl). Giải thích vì sao?",
      hint: "Bán kính nguyên tử: r(Na) > r(Cl). Giải thích: Cả 2 đều có 3 lớp electron (cùng chu kỳ 3). Hạt nhân Cl có 17 proton > Na (11 proton), lực hút tĩnh điện của hạt nhân Cl lên lớp vỏ e mạnh hơn làm co bán kính lại."
    },
    {
      q: "So sánh độ âm điện giữa ₉F và ₁₇Cl. Nêu xu hướng biến đổi độ âm điện của các nguyên tố trong cùng một nhóm A từ trên xuống dưới.",
      hint: "Độ âm điện: F > Cl. Trong cùng nhóm A, đi từ trên xuống dưới: số lớp electron tăng, bán kính tăng -> khả năng hút e liên kết giảm -> độ âm điện giảm dần (F là nguyên tố có độ âm điện lớn nhất: 3.98)."
    },
    {
      q: "Sắp xếp các nguyên tố sau theo chiều tăng dần tính kim loại: ₁₁Na, ₁₂Mg, ₁₉K. Giải thích ngắn gọn.",
      hint: "Thứ tự tăng dần: Mg < Na < K. Giải thích: Trong chu kỳ 3: Na > Mg. Trong nhóm IA: K > Na. Kết hợp lại ta có: Mg < Na < K."
    },
    {
      q: "So sánh bán kính của ion Na⁺ và ion Mg²⁺ với bán kính của nguyên tử Na và Mg tương ứng. Khi nguyên tử kim loại nhường electron thì bán kính biến đổi thế nào?",
      hint: "r(Na⁺) < r(Na) và r(Mg²⁺) < r(Mg). Khi nguyên tử nhường e tạo cation, mất lớp e ngoài cùng hoặc điện tích hạt nhân chiếm ưu thế hút các e còn lại mạnh hơn -> bán kính ion dương luôn nhỏ hơn nguyên tử tương ứng."
    }
  ],
  30: [
    {
      q: "Cho dãy các hydroxide chu kỳ 3: NaOH, Mg(OH)₂, Al(OH)₃. Sắp xếp theo thứ tự tính base giảm dần và giải thích nguyên nhân dựa vào độ âm điện?",
      hint: "Thứ tự tính base giảm dần: NaOH > Mg(OH)₂ > Al(OH)₃. Giải thích: Đi từ Na đến Al, độ âm điện tăng -> liên kết kim loại với nhóm OH kém phân cực ion hơn, khả năng phân ly ion OH⁻ giảm dần -> tính base giảm dần."
    },
    {
      q: "So sánh tính acid của các acid chu kỳ 3 sau: H₃PO₄, H₂SO₄, HClO₄. Nêu quy luật biến đổi tính acid của oxide và hydroxide cao nhất trong một chu kỳ từ trái sang phải.",
      hint: "Tính acid tăng dần: H₃PO₄ < H₂SO₄ < HClO₄ (HClO₄ là acid rất mạnh). Quy luật: Trong cùng một chu kỳ, đi từ trái sang phải theo chiều tăng điện tích hạt nhân, tính phi kim tăng -> tính acid của oxide và hydroxide cao nhất tăng dần."
    },
    {
      q: "Dự đoán hiện tượng và viết phương trình hóa học khi cho kim loại Sodium (Na) tác dụng với nước. Từ đó so sánh mức độ hoạt động hóa học của Na so với Mg khi tác dụng với nước ở nhiệt độ thường?",
      hint: "Hiện tượng: Na tan nhanh, chạy tròn trên mặt nước, sủi bọt khí H₂ mãnh liệt, dung dịch chuyển màu hồng với phenolphthalein. PTHH: 2Na + 2H₂O -> 2NaOH + H₂↑. Na hoạt động mạnh hơn Mg nhiều vì Mg hầu như không phản ứng với nước ở nhiệt độ thường."
    }
  ]
};

// 3. TEAMS STATE
let teams = [
  { id: 1, name: "Đội 1: Kim loại kiềm", color: "#dc2626", bg: "from-rose-600 to-red-700", badge: "bg-rose-600", xp: 120, pos: 1, avatar: "🔴" },
  { id: 2, name: "Đội 2: Halogen cảm tử", color: "#2563eb", bg: "from-blue-600 to-indigo-700", badge: "bg-blue-600", xp: 110, pos: 1, avatar: "🔵" },
  { id: 3, name: "Đội 3: Khí hiếm bất tử", color: "#d97706", bg: "from-amber-600 to-yellow-700", badge: "bg-amber-600", xp: 95, pos: 1, avatar: "🟡" },
  { id: 4, name: "Đội 4: Hạt nhân năng lượng", color: "#9333ea", bg: "from-purple-600 to-fuchsia-700", badge: "bg-purple-600", xp: 85, pos: 1, avatar: "🟣" }
];

let currentTeamIndex = 0;
let soundEnabled = true;
let timerSeconds = 45;
let timerInterval = null;
let currentActiveCard = null;

// 4. WEB AUDIO SYNTHESIZER
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    
    if (type === 'roll') {
      for (let i = 0; i < 4; i++) {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(150 + Math.random() * 200, now + i * 0.1);
        gain.gain.setValueAtTime(0.15, now + i * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.1);
        osc.stop(now + i * 0.1 + 0.08);
      }
    } else if (type === 'tick') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'alarm') {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(1046.5, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'correct') {
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);
        gain.gain.setValueAtTime(0.2, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.2);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.2);
      });
    }
  } catch(e) {}
}

// 5. RENDER BOARD TILES
function renderBoard() {
  const container = document.getElementById("boardTrack");
  container.innerHTML = "";

  boardTilesData.forEach((tile) => {
    const tileDiv = document.createElement("div");
    tileDiv.className = `board-tile rounded-xl p-2 flex flex-col justify-between border bg-slate-900/90 text-left relative min-h-[82px] cursor-pointer transition`;
    
    // Color border & tag
    if (tile.type === 'start') {
      tileDiv.classList.add("border-indigo-500/50", "bg-indigo-950/30");
    } else if (tile.type === 'card10') {
      tileDiv.classList.add("border-emerald-500/40", "hover:border-emerald-400");
    } else if (tile.type === 'card20') {
      tileDiv.classList.add("border-amber-500/40", "hover:border-amber-400");
    } else if (tile.type === 'card30') {
      tileDiv.classList.add("border-rose-500/40", "hover:border-rose-400");
    } else if (tile.type === 'lucky') {
      tileDiv.classList.add("border-purple-500/50", "bg-purple-950/30");
    } else if (tile.type === 'skip') {
      tileDiv.classList.add("border-rose-700/60", "bg-rose-950/30");
    } else if (tile.type === 'finish') {
      tileDiv.classList.add("border-amber-400", "bg-amber-950/40");
    } else {
      tileDiv.classList.add("border-slate-800", "hover:border-slate-600");
    }

    // Header of tile: ID + Badge
    let badgeHtml = "";
    if (tile.type === 'card10') badgeHtml = '<span class="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">10XP</span>';
    else if (tile.type === 'card20') badgeHtml = '<span class="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">20XP</span>';
    else if (tile.type === 'card30') badgeHtml = '<span class="text-[9px] font-bold px-1.5 py-0.2 rounded bg-rose-500/20 text-rose-300">30XP</span>';
    else if (tile.type === 'lucky') badgeHtml = '<span class="text-[9px] font-bold px-1 py-0.2 rounded bg-purple-500/20 text-purple-300">Quà</span>';
    else if (tile.type === 'skip') badgeHtml = '<span class="text-[9px] font-bold px-1 py-0.2 rounded bg-rose-900/40 text-rose-300">Mất lượt</span>';
    else if (tile.type === 'finish') badgeHtml = '<span class="text-[9px] font-bold px-1.5 py-0.2 rounded bg-amber-400/30 text-amber-300">ĐÍCH</span>';

    // Find pawns currently on this tile
    const pawnsHere = teams.filter(t => t.pos === tile.id);
    let pawnsHtml = "";
    if (pawnsHere.length > 0) {
      pawnsHtml = `<div class="flex items-center gap-1 mt-1 flex-wrap">
        ${pawnsHere.map(p => `<span class="inline-block transform scale-110 drop-shadow-md animate-bounce" title="${p.name}">${p.avatar}</span>`).join("")}
      </div>`;
    }

    tileDiv.innerHTML = `
      <div class="flex items-center justify-between">
        <span class="text-[10px] font-mono font-bold text-slate-500">#${tile.id}</span>
        ${badgeHtml}
      </div>
      <div class="my-0.5 flex items-baseline gap-1.5">
        <span class="text-base font-black tracking-tight text-white">${tile.symbol}</span>
        <span class="text-[10px] text-slate-400 truncate max-w-[80px]">${tile.name}</span>
      </div>
      <div>
        ${pawnsHtml}
      </div>
    `;

    // Click on tile to trigger question or inspect
    tileDiv.addEventListener("click", () => {
      onTileClick(tile);
    });

    container.appendChild(tileDiv);
  });
}

// 6. RENDER TEAMS LIST / LEADERBOARD
function renderTeams() {
  const container = document.getElementById("teamsList");
  container.innerHTML = "";

  // Sort copy by XP descending for ranking display
  const sorted = [...teams].sort((a, b) => b.xp - a.xp);

  teams.forEach((team, idx) => {
    const isCurrent = (idx === currentTeamIndex);
    const card = document.createElement("div");
    card.className = `p-2.5 rounded-xl border transition ${isCurrent ? 'bg-slate-800/90 border-amber-500 shadow-md ring-1 ring-amber-500/30' : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'}`;

    card.innerHTML = `
      <div class="flex items-center justify-between mb-1.5">
        <div class="flex items-center gap-2">
          <span class="text-base">${team.avatar}</span>
          <span class="font-bold text-xs text-white truncate max-w-[150px]">${team.name}</span>
          ${isCurrent ? '<span class="text-[10px] font-black bg-amber-500 text-slate-950 px-1.5 py-0.2 rounded">LƯỢT NÀY</span>' : ''}
        </div>
        <div class="text-right">
          <span class="font-mono font-extrabold text-sm text-amber-400">${team.xp}</span>
          <span class="text-[10px] text-slate-400">XP</span>
        </div>
      </div>

      <div class="flex items-center justify-between text-[11px] text-slate-400">
        <div>Vị trí: <b class="text-slate-200">Ô #${team.pos}</b> (${boardTilesData[team.pos - 1]?.symbol || ''})</div>
        <div class="flex items-center gap-1">
          <button onclick="modifyScore(${team.id}, 10)" class="bg-emerald-600/30 hover:bg-emerald-600/60 text-emerald-300 px-1.5 py-0.5 rounded font-mono font-bold">+10</button>
          <button onclick="modifyScore(${team.id}, 20)" class="bg-amber-600/30 hover:bg-amber-600/60 text-amber-300 px-1.5 py-0.5 rounded font-mono font-bold">+20</button>
          <button onclick="modifyScore(${team.id}, -5)" class="bg-rose-600/30 hover:bg-rose-600/60 text-rose-300 px-1.5 py-0.5 rounded font-mono font-bold">-5</button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  // Update header badge
  const activeTeam = teams[currentTeamIndex];
  const badge = document.getElementById("currentTeamBadge");
  if (badge && activeTeam) {
    badge.innerText = activeTeam.name;
    badge.className = `font-bold px-2 py-0.5 rounded text-white ${activeTeam.badge}`;
  }

  const scoringName = document.getElementById("scoringTeamName");
  if (scoringName && activeTeam) {
    scoringName.innerText = activeTeam.name;
  }
}

// 7. DICE ROLLING LOGIC (3D CSS ANIMATION)
let isRolling = false;

function rollDice() {
  if (isRolling) return;
  isRolling = true;
  playSound('roll');

  const dice = document.getElementById("dice");
  const resultText = document.getElementById("diceResultText");
  const btn = document.getElementById("btnRollDice");
  btn.disabled = true;

  dice.className = "dice rolling";
  resultText.innerText = "Đang lắc xúc xắc 3D...";

  const outcome = Math.floor(Math.random() * 6) + 1;

  setTimeout(() => {
    dice.className = `dice show-${outcome}`;
    resultText.innerText = `Kết quả: ${outcome} điểm!`;
    isRolling = false;
    btn.disabled = false;

    // Move current team
    moveCurrentTeam(outcome);
  }, 1200);
}

// 8. MOVE TEAM PAWN
function moveCurrentTeam(steps) {
  const currentTeam = teams[currentTeamIndex];
  let oldPos = currentTeam.pos;
  let newPos = oldPos + steps;

  if (newPos >= 24) {
    newPos = 24;
  }
  currentTeam.pos = newPos;

  const currentTile = boardTilesData[newPos - 1];
  renderBoard();
  renderTeams();

  const statusMsg = document.getElementById("statusMessage");
  statusMsg.innerHTML = `<b class="text-amber-400">${currentTeam.name}</b> đổ được <b>${steps}</b> điểm, tiến từ ô #${oldPos} đến ô <b>#${newPos} (${currentTile.symbol} - ${currentTile.name})</b>!`;

  // Trigger tile action
  setTimeout(() => {
    handleTileLanded(currentTile, currentTeam);
  }, 600);
}

function handleTileLanded(tile, team) {
  if (tile.type === 'card10') {
    openCardByType(10, tile);
  } else if (tile.type === 'card20') {
    openCardByType(20, tile);
  } else if (tile.type === 'card30') {
    openCardByType(30, tile);
  } else if (tile.type === 'lucky') {
    team.xp += 15;
    renderTeams();
    playSound('correct');
    triggerConfetti();
    alert(`🎉 CHÚC MỪNG ${team.name} rơi vào Ô MAY MẮN: Nhận ngay +15 XP!`);
  } else if (tile.type === 'skip') {
    alert(`⚠️ TIẾC QUÁ! ${team.name} rơi vào ô MẤT LƯỢT. Nhường quyền cho đội kế tiếp!`);
    nextTurn();
  } else if (tile.type === 'finish') {
    team.xp += 50;
    renderTeams();
    playSound('correct');
    triggerConfetti();
    alert(`🏆 VỀ ĐÍCH XUẤT SẮC! ${team.name} là đội cán đích đầu tiên và được thưởng nóng +50 XP!`);
  }
}

function onTileClick(tile) {
  if (tile.type.startsWith('card')) {
    const level = parseInt(tile.type.replace('card', ''));
    openCardByType(level, tile);
  }
}

// 9. MODAL: CHALLENGE CARDS
function openCardByType(level, tile = null) {
  const list = questionsBank[level] || questionsBank[10];
  const qItem = list[Math.floor(Math.random() * list.length)];
  currentActiveCard = { level, item: qItem, tile };

  const modal = document.getElementById("cardModal");
  const badge = document.getElementById("modalCardBadge");
  const elemTitle = document.getElementById("modalCardElement");
  const qText = document.getElementById("modalQuestionText");
  const hintContent = document.getElementById("modalHintContent");
  const arrow = document.getElementById("hintArrow");

  badge.innerText = `THẺ ${level} XP`;
  if (level === 10) badge.className = "px-2.5 py-1 rounded-lg font-black text-xs text-white bg-emerald-600";
  if (level === 20) badge.className = "px-2.5 py-1 rounded-lg font-black text-xs text-white bg-amber-600";
  if (level === 30) badge.className = "px-2.5 py-1 rounded-lg font-black text-xs text-white bg-rose-600";

  elemTitle.innerText = tile ? `Ô số ${tile.id} • ${tile.name} (${tile.symbol})` : `Thử thách trạm luyện tập`;
  qText.innerHTML = qItem.q;
  hintContent.innerHTML = qItem.hint;
  hintContent.classList.add("hidden");
  arrow.innerText = "▼ Xem";

  modal.classList.remove("hidden");

  // Auto reset and start 45s timer
  resetTimer(45);
  startTimer();
}

function closeCardModal() {
  document.getElementById("cardModal").classList.add("hidden");
  pauseTimer();
}

function toggleRubricHint() {
  const hintContent = document.getElementById("modalHintContent");
  const arrow = document.getElementById("hintArrow");
  if (hintContent.classList.contains("hidden")) {
    hintContent.classList.remove("hidden");
    arrow.innerText = "▲ Thu gọn";
  } else {
    hintContent.classList.add("hidden");
    arrow.innerText = "▼ Xem";
  }
}

// 10. SCORING ACTIONS
function modifyScore(teamId, delta) {
  const team = teams.find(t => t.id === teamId);
  if (team) {
    team.xp += delta;
    if (team.xp < 0) team.xp = 0;
    renderTeams();
  }
}

function awardActiveCardPoints() {
  if (!currentActiveCard) return;
  const currentTeam = teams[currentTeamIndex];
  currentTeam.xp += currentActiveCard.level;
  renderTeams();
  playSound('correct');
  triggerConfetti();
  closeCardModal();

  const statusMsg = document.getElementById("statusMessage");
  statusMsg.innerHTML = `🎉 <b class="text-emerald-400">${currentTeam.name}</b> trả lời chính xác, nhận được <b>+${currentActiveCard.level} XP</b>!`;
}

function stealActiveCardPoints() {
  if (!currentActiveCard) return;
  const otherTeams = teams.filter((_, idx) => idx !== currentTeamIndex);
  let promptText = "Chọn đội cướp điểm thành công:\n" + otherTeams.map((t, i) => `${i + 1}. ${t.name}`).join("\n");
  let choice = prompt(promptText, "1");
  let chosenIndex = parseInt(choice) - 1;

  if (!isNaN(chosenIndex) && otherTeams[chosenIndex]) {
    const thief = otherTeams[chosenIndex];
    thief.xp += currentActiveCard.level;
    renderTeams();
    playSound('correct');
    triggerConfetti();
    closeCardModal();

    const statusMsg = document.getElementById("statusMessage");
    statusMsg.innerHTML = `⚡ <b class="text-purple-400">${thief.name}</b> đã phản biện xuất sắc và cướp được <b>+${currentActiveCard.level} XP</b>!`;
  }
}

// 11. PASS TURN
function nextTurn() {
  currentTeamIndex = (currentTeamIndex + 1) % teams.length;
  renderTeams();
  const nextTeam = teams[currentTeamIndex];
  const statusMsg = document.getElementById("statusMessage");
  statusMsg.innerHTML = `Lượt tiếp theo thuộc về <b class="text-amber-400">${nextTeam.name}</b>! Hãy bấm nút "Tung Xúc Xắc".`;
}

// 12. TIMER LOGIC (45s COUNTDOWN)
function updateTimerDisplay() {
  const text = document.getElementById("timerText");
  const circle = document.getElementById("timerCircle");
  if (!text || !circle) return;

  text.innerText = timerSeconds;

  // Percentage 0 - 100
  const pct = (timerSeconds / 45) * 100;
  circle.setAttribute("stroke-dasharray", `${pct}, 100`);

  if (timerSeconds <= 10) {
    circle.className = "text-rose-500 transition-all duration-300";
    text.className = "absolute font-mono text-xl font-black text-rose-500 animate-pulse";
  } else if (timerSeconds <= 20) {
    circle.className = "text-amber-500 transition-all duration-300";
    text.className = "absolute font-mono text-xl font-black text-amber-400";
  } else {
    circle.className = "text-emerald-500 transition-all duration-300";
    text.className = "absolute font-mono text-xl font-black text-emerald-400";
  }
}

function startTimer() {
  if (timerInterval) return;
  const btn = document.getElementById("btnStartTimer");
  if (btn) btn.innerText = "Tạm dừng";

  timerInterval = setInterval(() => {
    if (timerSeconds > 0) {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 5 && timerSeconds > 0) {
        playSound('tick');
      }
    } else {
      pauseTimer();
      playSound('alarm');
      alert("⏰ HẾT GIỜ 45 GIÂY! Nhóm đối diện chuẩn bị nhận xét hoặc giơ tay cướp điểm!");
    }
  }, 1000);
}

function pauseTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
    const btn = document.getElementById("btnStartTimer");
    if (btn) btn.innerText = "Tiếp tục";
  }
}

function resetTimer(secs = 45) {
  pauseTimer();
  timerSeconds = secs;
  updateTimerDisplay();
  const btn = document.getElementById("btnStartTimer");
  if (btn) btn.innerText = "Bắt đầu";
}

// 13. CELEBRATION CONFETTI
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// 14. RESET BOARD PAWNS
function resetBoardPawns() {
  if (confirm("Thầy/Cô có chắc muốn đặt lại vị trí tất cả các quân cờ về ô xuất phát #1?")) {
    teams.forEach(t => t.pos = 1);
    currentTeamIndex = 0;
    renderBoard();
    renderTeams();
  }
}

// 15. INITIALIZATION & EVENT LISTENERS
window.addEventListener("DOMContentLoaded", () => {
  renderBoard();
  renderTeams();
  updateTimerDisplay();

  // Dice roll
  document.getElementById("btnRollDice")?.addEventListener("click", rollDice);

  // Timer controls
  document.getElementById("btnStartTimer")?.addEventListener("click", () => {
    if (timerInterval) pauseTimer();
    else startTimer();
  });
  document.getElementById("btnResetTimer")?.addEventListener("click", () => resetTimer(45));

  // Next turn
  document.getElementById("btnNextTurn")?.addEventListener("click", nextTurn);

  // Scoring in modal
  document.getElementById("btnAwardPoints")?.addEventListener("click", awardActiveCardPoints);
  document.getElementById("btnStealPoints")?.addEventListener("click", stealActiveCardPoints);

  // Celebrate
  document.getElementById("btnCelebrate")?.addEventListener("click", () => {
    triggerConfetti();
    playSound('correct');
  });

  // Sound toggle
  const soundBtn = document.getElementById("btnSound");
  soundBtn?.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundBtn.innerText = soundEnabled ? "🔊" : "🔇";
  });

  // Fullscreen toggle
  const fsBtn = document.getElementById("btnFullscreen");
  fsBtn?.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  });

  // Reset board
  document.getElementById("btnResetBoard")?.addEventListener("click", resetBoardPawns);
});
