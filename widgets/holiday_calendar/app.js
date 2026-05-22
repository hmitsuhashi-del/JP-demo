// 2026年5月の世界の祝日データ（国旗絵文字付き）
const HOLIDAYS = {
  1: [
    { flag: "🇩🇪", country: "ドイツ", name: "労働の日" },
    { flag: "🇫🇷", country: "フランス", name: "労働祭" },
    { flag: "🇮🇹", country: "イタリア", name: "労働記念日" },
    { flag: "🇪🇸", country: "スペイン", name: "労働の日" },
    { flag: "🇨🇳", country: "中国", name: "労働節" },
    { flag: "🇧🇷", country: "ブラジル", name: "労働者の日" },
    { flag: "🇷🇺", country: "ロシア", name: "春と労働の祝日" },
    { flag: "🇰🇷", country: "韓国", name: "勤労者の日" },
    { flag: "🇲🇽", country: "メキシコ", name: "労働の日" },
    { flag: "🇵🇱", country: "ポーランド", name: "労働の日" },
    { flag: "🇫🇮", country: "フィンランド", name: "ヴァップ（春の祝日）" },
    { flag: "🇸🇪", country: "スウェーデン", name: "メーデー" },
    { flag: "🇳🇴", country: "ノルウェー", name: "労働者の日" },
    { flag: "🇦🇷", country: "アルゼンチン", name: "労働者の日" },
  ],
  3: [
    { flag: "🇯🇵", country: "日本", name: "憲法記念日" },
    { flag: "🇵🇱", country: "ポーランド", name: "憲法記念日" },
  ],
  4: [
    { flag: "🇯🇵", country: "日本", name: "みどりの日" },
  ],
  5: [
    { flag: "🇯🇵", country: "日本", name: "こどもの日" },
    { flag: "🇲🇽", country: "メキシコ", name: "シンコ・デ・マヨ" },
    { flag: "🇰🇷", country: "韓国", name: "어린이날（こどもの日）" },
    { flag: "🇳🇱", country: "オランダ", name: "解放記念日" },
  ],
  6: [
    { flag: "🇯🇵", country: "日本", name: "振替休日（こどもの日）" },
  ],
  8: [
    { flag: "🇫🇷", country: "フランス", name: "対独戦勝記念日" },
    { flag: "🇨🇿", country: "チェコ", name: "解放記念日" },
    { flag: "🇸🇰", country: "スロバキア", name: "ファシズムからの解放の日" },
  ],
  9: [
    { flag: "🇷🇺", country: "ロシア", name: "戦勝記念日" },
    { flag: "🇺🇦", country: "ウクライナ", name: "勝利の日" },
    { flag: "🇧🇾", country: "ベラルーシ", name: "勝利の日" },
    { flag: "🇪🇺", country: "EU", name: "ヨーロッパの日" },
    { flag: "🇲🇩", country: "モルドバ", name: "勝利の日" },
  ],
  10: [
    { flag: "🇺🇸", country: "アメリカ", name: "母の日" },
    { flag: "🇯🇵", country: "日本", name: "母の日" },
    { flag: "🇨🇦", country: "カナダ", name: "母の日" },
    { flag: "🇦🇺", country: "オーストラリア", name: "母の日" },
    { flag: "🇩🇪", country: "ドイツ", name: "母の日" },
    { flag: "🇳🇿", country: "ニュージーランド", name: "母の日" },
    { flag: "🇧🇷", country: "ブラジル", name: "母の日" },
    { flag: "🇮🇹", country: "イタリア", name: "母の日" },
  ],
  14: [
    // イースター後39日 = 2026年5月14日（キリスト昇天祭）
    { flag: "🇩🇪", country: "ドイツ", name: "キリスト昇天祭・父の日" },
    { flag: "🇫🇷", country: "フランス", name: "昇天祭" },
    { flag: "🇨🇭", country: "スイス", name: "昇天祭" },
    { flag: "🇦🇹", country: "オーストリア", name: "昇天祭" },
    { flag: "🇧🇪", country: "ベルギー", name: "昇天祭" },
    { flag: "🇳🇱", country: "オランダ", name: "昇天祭" },
    { flag: "🇳🇴", country: "ノルウェー", name: "昇天祭" },
    { flag: "🇸🇪", country: "スウェーデン", name: "昇天祭" },
    { flag: "🇩🇰", country: "デンマーク", name: "昇天祭" },
    { flag: "🇫🇮", country: "フィンランド", name: "昇天祭" },
    { flag: "🇱🇺", country: "ルクセンブルク", name: "昇天祭" },
  ],
  17: [
    { flag: "🇳🇴", country: "ノルウェー", name: "憲法記念日（シッテンデ・マイ）" },
  ],
  18: [
    { flag: "🇨🇦", country: "カナダ", name: "ビクトリアデー" },
  ],
  20: [
    { flag: "🇨🇲", country: "カメルーン", name: "統一記念日" },
  ],
  24: [
    // イースター後49日 = 2026年5月24日（ペンテコステ）
    { flag: "🇩🇪", country: "ドイツ", name: "聖霊降臨祭（ペンテコステ）" },
    { flag: "🇫🇷", country: "フランス", name: "聖霊降臨祭" },
    { flag: "🇨🇭", country: "スイス", name: "聖霊降臨祭" },
    { flag: "🇦🇹", country: "オーストリア", name: "聖霊降臨祭" },
    { flag: "🇧🇪", country: "ベルギー", name: "聖霊降臨祭" },
    { flag: "🇳🇱", country: "オランダ", name: "ピンクスターダーフ" },
    { flag: "🇳🇴", country: "ノルウェー", name: "聖霊降臨祭" },
    { flag: "🇩🇰", country: "デンマーク", name: "聖霊降臨祭" },
  ],
  25: [
    // ペンテコステ翌月曜日 + メモリアルデー（2026年は同日）
    { flag: "🇺🇸", country: "アメリカ", name: "メモリアルデー" },
    { flag: "🇩🇪", country: "ドイツ", name: "聖霊降臨祭翌月曜日" },
    { flag: "🇫🇷", country: "フランス", name: "聖霊降臨祭翌月曜日" },
    { flag: "🇧🇪", country: "ベルギー", name: "聖霊降臨祭翌月曜日" },
    { flag: "🇳🇱", country: "オランダ", name: "第二ピンクスターダーフ" },
    { flag: "🇩🇰", country: "デンマーク", name: "聖霊降臨祭翌月曜日" },
    { flag: "🇳🇴", country: "ノルウェー", name: "聖霊降臨祭翌月曜日" },
    { flag: "🇦🇷", country: "アルゼンチン", name: "五月革命記念日" },
    { flag: "🇯🇴", country: "ヨルダン", name: "独立記念日" },
  ],
  28: [
    { flag: "🇦🇿", country: "アゼルバイジャン", name: "共和国の日" },
    { flag: "🇪🇪", country: "エストニア", name: "独立記念日" },
  ],
  31: [
    { flag: "🇧🇳", country: "ブルネイ", name: "ブルネイ国民の日" },
  ],
};

// 曜日ヘッダー（日曜始まり）
const DAY_LABELS = ["日", "月", "火", "水", "木", "金", "土"];

// 2026年5月1日は金曜日（index=5）
const FIRST_DOW = 5;
const TOTAL_DAYS = 31;
const TODAY = 23;

export async function init(sdk) {
  await sdk.whenReady();

  const grid = sdk.$('#hc-grid');
  const panel = sdk.$('#hc-panel');
  const panelDate = sdk.$('#hc-panel-date');
  const panelCount = sdk.$('#hc-panel-count');
  const panelList = sdk.$('#hc-panel-list');
  const hint = sdk.$('#hc-hint');

  if (!grid) return;

  // 曜日ヘッダー行を生成
  DAY_LABELS.forEach((label, i) => {
    const el = document.createElement('div');
    el.className = 'hc-day-header' + (i === 0 ? ' hc-sun' : i === 6 ? ' hc-sat' : '');
    el.textContent = label;
    grid.appendChild(el);
  });

  // 1日前の空白セル
  for (let i = 0; i < FIRST_DOW; i++) {
    grid.appendChild(document.createElement('div'));
  }

  let activeDay = null;

  // 日付セルを生成
  for (let day = 1; day <= TOTAL_DAYS; day++) {
    const dow = (FIRST_DOW + day - 1) % 7; // 0=日, 6=土
    const holidays = HOLIDAYS[day] || [];
    const hasHoliday = holidays.length > 0;

    const cell = document.createElement('div');
    const cls = ['hc-day-cell'];
    if (hasHoliday) cls.push('hc-has-holiday');
    if (day === TODAY) cls.push('hc-today');
    if (dow === 0) cls.push('hc-sun');
    if (dow === 6) cls.push('hc-sat');
    cell.className = cls.join(' ');
    cell.dataset.day = String(day);

    // 日付数字
    const num = document.createElement('span');
    num.className = 'hc-day-number';
    num.textContent = String(day);
    cell.appendChild(num);

    // 今日マーク（右上の点）
    if (day === TODAY) {
      const ring = document.createElement('div');
      ring.className = 'hc-today-ring';
      cell.appendChild(ring);
    }

    // 祝日インジケーター（最大3ドット + "+"表示）
    if (hasHoliday) {
      const dotsWrap = document.createElement('div');
      dotsWrap.className = 'hc-dots';

      const showDots = Math.min(holidays.length, 3);
      for (let d = 0; d < showDots; d++) {
        const dot = document.createElement('div');
        dot.className = 'hc-dot';
        dotsWrap.appendChild(dot);
      }
      if (holidays.length > 3) {
        const more = document.createElement('span');
        more.className = 'hc-dot-more';
        more.textContent = '+';
        dotsWrap.appendChild(more);
      }
      cell.appendChild(dotsWrap);

      cell.addEventListener('click', () => {
        // 前のアクティブを解除
        if (activeDay !== null) {
          const prev = grid.querySelector(`[data-day="${activeDay}"]`);
          if (prev) prev.classList.remove('hc-active');
        }

        if (activeDay === day) {
          // 同じ日をもう一度クリックで閉じる
          activeDay = null;
          panel.classList.remove('hc-visible');
          hint.style.display = '';
        } else {
          activeDay = day;
          cell.classList.add('hc-active');
          showPanel(day, dow, holidays, panelDate, panelCount, panelList, panel, hint);
        }
      });
    }

    grid.appendChild(cell);
  }
}

function showPanel(day, dow, holidays, panelDate, panelCount, panelList, panel, hint) {
  panelDate.textContent = `5月${day}日（${DAY_LABELS[dow]}）の世界の祝日`;
  panelCount.textContent = `${holidays.length}か国・地域`;

  panelList.innerHTML = '';
  holidays.forEach(h => {
    const item = document.createElement('div');
    item.className = 'hc-holiday-item';

    const flag = document.createElement('div');
    flag.className = 'hc-flag';
    flag.textContent = h.flag;

    const info = document.createElement('div');
    info.className = 'hc-holiday-info';

    const name = document.createElement('div');
    name.className = 'hc-holiday-name';
    name.textContent = h.name;

    const country = document.createElement('div');
    country.className = 'hc-holiday-country';
    country.textContent = h.country;

    info.appendChild(name);
    info.appendChild(country);
    item.appendChild(flag);
    item.appendChild(info);
    panelList.appendChild(item);
  });

  hint.style.display = 'none';

  // アニメーションをリセットして再生
  panel.classList.remove('hc-visible');
  void panel.offsetWidth;
  panel.classList.add('hc-visible');
}
