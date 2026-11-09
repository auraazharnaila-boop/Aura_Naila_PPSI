/**
 * PatunganKu — PWA Tracker Tagihan Bulanan & Patungan Kos
 * Core Client-Side Engine & Reactive State
 */

// =============================================================================
// 1. DATA SEEDING & STATE INITIALIZATION
// =============================================================================

const STORAGE_KEY = 'patunganku_state_v1';

// Seed sample dummy receipt image (base64 SVG m-banking receipt)
const DUMMY_RECEIPT_IMG = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='260' viewBox='0 0 400 260'><rect width='400' height='260' rx='16' fill='%2300529C'/><rect x='15' y='15' width='370' height='230' rx='12' fill='%23FFFFFF'/><text x='30' y='45' font-family='sans-serif' font-size='16' font-weight='bold' fill='%2300529C'>m-BCA TRANSFER BERHASIL</text><line x1='30' y1='58' x2='370' y2='58' stroke='%23E2E8F0' stroke-width='2'/><text x='30' y='85' font-family='sans-serif' font-size='12' fill='%2364748B'>Tanggal Transaksi:</text><text x='370' y='85' text-anchor='end' font-family='sans-serif' font-size='12' font-weight='bold' fill='%230F172A'>12/10/2026 14:15:22 WIB</text><text x='30' y='115' font-family='sans-serif' font-size='12' fill='%2364748B'>Ke Rekening:</text><text x='370' y='115' text-anchor='end' font-family='sans-serif' font-size='12' font-weight='bold' fill='%230F172A'>8720192831 (RINA AMELIA)</text><text x='30' y='145' font-family='sans-serif' font-size='12' fill='%2364748B'>Nominal:</text><text x='370' y='145' text-anchor='end' font-family='sans-serif' font-size='16' font-weight='bold' fill='%23047857'>Rp 100.000,00</text><text x='30' y='175' font-family='sans-serif' font-size='12' fill='%2364748B'>Berita:</text><text x='370' y='175' text-anchor='end' font-family='sans-serif' font-size='12' fill='%230F172A'>Patungan Listrik Kos Okt</text><rect x='30' y='195' width='340' height='36' rx='8' fill='%23ECFDF5'/><text x='200' y='218' text-anchor='middle' font-family='sans-serif' font-size='12' font-weight='bold' fill='%23065F46'>STATUS: TRANSAKSI BERHASIL</text></svg>";

const DEFAULT_STATE = {
  activeUserId: 'u1', // Default: Rina (Admin/Penalang)
  currentGroup: {
    id: 'g1',
    name: 'Kos Griya Melati 4A',
    address: 'Jl. Melati No. 4A, Sukarame',
    inviteCode: 'PATUNGAN-MELATI-4A',
    maxMembers: 8,
  },
  users: [
    {
      id: 'u1',
      name: 'Rina Amelia',
      role: 'Admin & Penalang',
      room: 'Kamar 01',
      bankInfo: 'BCA 8720192831 a.n Rina Amelia',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces',
      email: 'rina.amelia@gmail.com'
    },
    {
      id: 'u2',
      name: 'Dimas Prasetyo',
      role: 'Anggota Kos',
      room: 'Kamar 02',
      bankInfo: 'Mandiri 132001928311',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=120&fit=crop&crop=faces',
      email: 'dimas.prasetyo@gmail.com'
    },
    {
      id: 'u3',
      name: 'Siti Rahma',
      role: 'Anggota Kos',
      room: 'Kamar 03',
      bankInfo: 'BSI 7182930412',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=120&h=120&fit=crop&crop=faces',
      email: 'siti.rahma@gmail.com'
    },
    {
      id: 'u4',
      name: 'Budi Santoso',
      role: 'Anggota Kos',
      room: 'Kamar 04',
      bankInfo: 'BRI 020601089281504',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces',
      email: 'budi.santoso@gmail.com'
    }
  ],
  currentPeriod: 'Oktober 2026',
  bills: [
    {
      id: 'b1',
      name: 'Listrik Token PLN',
      category: 'listrik',
      categoryIcon: 'bolt',
      totalAmount: 400000,
      dueDay: 25,
      dueDateFormatted: '25 Okt 2026',
      payerId: 'u1',
      splitMode: 'equal',
      shares: [
        { userId: 'u1', amount: 100000, status: 'Lunas', paidAt: '2026-10-01 08:00 WIB', confirmedBy: 'System (Penalang)' },
        { userId: 'u3', amount: 100000, status: 'Lunas', paidAt: '2026-10-10 11:30 WIB', confirmedBy: 'Rina Amelia' },
        { 
          userId: 'u4', 
          amount: 100000, 
          status: 'Menunggu Konfirmasi', 
          submittedAt: '2026-10-12 14:15 WIB',
          receiptUrl: DUMMY_RECEIPT_IMG
        },
        { userId: 'u2', amount: 100000, status: 'Belum Bayar' }
      ]
    },
    {
      id: 'b2',
      name: 'WiFi MyRepublic 100 Mbps',
      category: 'wifi',
      categoryIcon: 'wifi',
      totalAmount: 350000,
      dueDay: 28,
      dueDateFormatted: '28 Okt 2026',
      payerId: 'u1',
      splitMode: 'equal',
      shares: [
        { userId: 'u1', amount: 87500, status: 'Lunas', paidAt: '2026-10-01 08:00 WIB', confirmedBy: 'System (Penalang)' },
        { userId: 'u2', amount: 87500, status: 'Belum Bayar' },
        { userId: 'u3', amount: 87500, status: 'Belum Bayar' },
        { userId: 'u4', amount: 87500, status: 'Belum Bayar' }
      ]
    },
    {
      id: 'b3',
      name: 'Galon & Kebersihan Kos',
      category: 'kebersihan',
      categoryIcon: 'water_drop',
      totalAmount: 120000,
      dueDay: 30,
      dueDateFormatted: '30 Okt 2026',
      payerId: 'u1',
      splitMode: 'equal',
      shares: [
        { userId: 'u1', amount: 30000, status: 'Lunas', paidAt: '2026-10-01 08:00 WIB', confirmedBy: 'System (Penalang)' },
        { userId: 'u2', amount: 30000, status: 'Lunas', paidAt: '2026-10-05 09:00 WIB', confirmedBy: 'Rina Amelia' },
        { userId: 'u3', amount: 30000, status: 'Lunas', paidAt: '2026-10-06 14:20 WIB', confirmedBy: 'Rina Amelia' },
        { userId: 'u4', amount: 30000, status: 'Lunas', paidAt: '2026-10-07 16:45 WIB', confirmedBy: 'Rina Amelia' }
      ]
    }
  ],
  historyBills: {
    'september-2026': [
      { name: 'Listrik Token PLN', category: 'listrik', icon: 'bolt', total: 380000, status: 'Lunas', paidDate: '24 Sep 2026' },
      { name: 'WiFi MyRepublic 100 Mbps', category: 'wifi', icon: 'wifi', total: 350000, status: 'Lunas', paidDate: '27 Sep 2026' },
      { name: 'Galon & Kebersihan', category: 'kebersihan', icon: 'water_drop', total: 100000, status: 'Lunas', paidDate: '29 Sep 2026' }
    ],
    'agustus-2026': [
      { name: 'Listrik Token PLN', category: 'listrik', icon: 'bolt', total: 395000, status: 'Lunas', paidDate: '23 Ags 2026' },
      { name: 'WiFi MyRepublic 100 Mbps', category: 'wifi', icon: 'wifi', total: 350000, status: 'Lunas', paidDate: '26 Ags 2026' },
      { name: 'Galon & Kebersihan', category: 'kebersihan', icon: 'water_drop', total: 100000, status: 'Lunas', paidDate: '28 Ags 2026' }
    ]
  },
  statusLogs: [
    { time: '12 Okt, 14:15 WIB', actor: 'Budi Santoso', action: 'Mengunggah bukti m-banking untuk Listrik Token (Rp100.000)' },
    { time: '10 Okt, 11:30 WIB', actor: 'Rina Amelia', action: 'Mengonfirmasi Lunas pembayaran Siti Rahma pada Listrik Token' },
    { time: '07 Okt, 16:45 WIB', actor: 'Rina Amelia', action: 'Mengonfirmasi Lunas pembayaran Budi pada Galon & Kebersihan' },
    { time: '01 Okt, 08:00 WIB', actor: 'Sistem PatunganKu', action: 'Periode baru Oktober 2026 aktif otomatis. Bagian penalang lunas otomatis.' }
  ],
  notifications: [
    {
      id: 'n1',
      title: 'Klaim Pembayaran Baru',
      body: 'Budi Santoso menandai sudah transfer Rp100.000 untuk Listrik Token. Perlu konfirmasi penalang.',
      time: '12 Okt 14:15 WIB',
      read: false,
      type: 'pending'
    },
    {
      id: 'n2',
      title: 'Pengingat Jatuh Tempo (H-3)',
      body: 'Tagihan Listrik Token PLN akan jatuh tempo dalam 3 hari (25 Okt 2026).',
      time: '12 Okt 08:00 WIB',
      read: false,
      type: 'reminder'
    },
    {
      id: 'n3',
      title: 'Pembayaran Dikonfirmasi',
      body: 'Rina mengonfirmasi pembayaran Siti Rahma sebesar Rp100.000 telah lunas.',
      time: '10 Okt 11:30 WIB',
      read: true,
      type: 'success'
    }
  ]
};

// Global App State Object
let state = JSON.parse(JSON.stringify(DEFAULT_STATE));
let activeFilter = 'all';
let currentSplitMode = 'equal';
let pendingVerifyTarget = null; // { billId, userId }
let pendingPayTarget = null;    // { billId }

// =============================================================================
// 2. HELPER UTILITIES
// =============================================================================

function formatRupiah(amount) {
  if (isNaN(amount) || amount === null) return 'Rp0';
  return 'Rp' + Number(amount).toLocaleString('id-ID');
}

function parseRupiah(str) {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  const cleaned = str.replace(/[^\d]/g, '');
  return cleaned ? parseInt(cleaned, 10) : 0;
}

function formatCurrencyInput(input) {
  const val = parseRupiah(input.value);
  input.value = val ? 'Rp' + val.toLocaleString('id-ID') : '';
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      state = { ...DEFAULT_STATE, ...parsed };
    }
  } catch (e) {
    console.error('Failed to load from localStorage:', e);
    state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  }
}

function resetDataSeed() {
  state = JSON.parse(JSON.stringify(DEFAULT_STATE));
  saveState();
  renderApp();
  showToast('Data aplikasi berhasil direset ke kondisi awal!', 'success', 'check_circle');
}

// =============================================================================
// 3. TOAST SYSTEM
// =============================================================================

function showToast(message, type = 'info', iconName = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';

  if (type === 'success') {
    toast.className += ' bg-emerald-700 text-white shadow-emerald-900/30';
  } else if (type === 'error') {
    toast.className += ' bg-rose-700 text-white shadow-rose-900/30';
  } else if (type === 'warning') {
    toast.className += ' bg-amber-600 text-white shadow-amber-900/30';
  } else {
    toast.className += ' bg-[#2D1B2A] text-white shadow-pink-950/40';
  }

  toast.innerHTML = `
    <span class="material-symbols-outlined text-xl">${iconName}</span>
    <span class="flex-1">${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-10px)';
    toast.style.transition = 'all 0.25s ease';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// =============================================================================
// 4. PERSONA & TAB NAVIGATION
// =============================================================================

function switchPersona(userId) {
  state.activeUserId = userId;
  saveState();
  renderApp();
  
  const user = state.users.find(u => u.id === userId);
  if (user) {
    showToast(`Beralih persona ke ${user.name} (${user.role})`, 'info', 'swap_horiz');
  }
}

function switchTab(tabName) {
  const tabs = ['beranda', 'riwayat', 'notifikasi'];
  tabs.forEach(t => {
    const section = document.getElementById(`tab-${t}`);
    const navBtn = document.getElementById(`nav-btn-${t}`);
    if (section && navBtn) {
      if (t === tabName) {
        section.classList.remove('hidden');
        navBtn.classList.add('text-primary', 'font-bold');
        navBtn.classList.remove('text-onSurface-variant');
      } else {
        section.classList.add('hidden');
        navBtn.classList.remove('text-primary', 'font-bold');
        navBtn.classList.add('text-onSurface-variant');
      }
    }
  });

  // If opening notifications, update badge counter visual
  if (tabName === 'notifikasi') {
    renderNotifications();
  }
}

function setFilter(filter) {
  activeFilter = filter;
  document.querySelectorAll('.filter-chip').forEach(btn => {
    if (btn.dataset.filter === filter) {
      btn.className = 'filter-chip active px-3 py-1.5 rounded-full font-bold transition-all bg-primary text-white whitespace-nowrap text-[11px] shadow-xs';
    } else {
      btn.className = 'filter-chip px-3 py-1.5 rounded-full font-medium transition-all bg-surface-containerLowest text-onSurface-variant border border-outline-variant hover:border-primary whitespace-nowrap text-[11px]';
    }
  });
  renderBillsList();
}

function dismissBanner() {
  const banner = document.getElementById('pwa-banner');
  if (banner) {
    banner.style.display = 'none';
  }
}

function installPWA() {
  showToast('PatunganKu siap dipasang di layar utama melalui menu browser Anda!', 'success', 'install_mobile');
}

function scrollToBills() {
  const el = document.getElementById('bills-container');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// =============================================================================
// 5. CORE RENDERING PIPELINE
// =============================================================================

function renderApp() {
  renderPersonaBar();
  renderHeaderUser();
  renderDashboardStats();
  renderBillsList();
  renderHistoryView();
  renderNotifications();
  renderRoommates();
}

function renderPersonaBar() {
  const btnRina = document.getElementById('btn-persona-rina');
  const btnDimas = document.getElementById('btn-persona-dimas');

  if (state.activeUserId === 'u1') {
    btnRina.className = 'px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 bg-primary text-white shadow-sm';
    btnDimas.className = 'px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 text-pink-200 hover:text-white';
  } else {
    btnRina.className = 'px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 text-pink-200 hover:text-white';
    btnDimas.className = 'px-2.5 py-1 rounded-md text-[11px] font-semibold transition-all flex items-center gap-1 bg-primary text-white shadow-sm';
  }
}

function renderHeaderUser() {
  const activeUser = state.users.find(u => u.id === state.activeUserId) || state.users[0];
  
  // Header elements
  const avatar = document.getElementById('header-avatar');
  const displayName = document.getElementById('user-display-name');
  const roleDesc = document.getElementById('user-role-desc');
  const roleCard = document.getElementById('role-welcome-card');
  const btnAddBill = document.getElementById('btn-add-bill');
  const dimasCard = document.getElementById('dimas-personal-card');

  if (avatar) avatar.src = activeUser.avatar;
  if (displayName) displayName.textContent = activeUser.name;
  if (roleDesc) roleDesc.textContent = activeUser.role;

  // Role contextual adjustments
  if (state.activeUserId === 'u1') {
    // Rina - Admin / Penalang
    if (btnAddBill) btnAddBill.classList.remove('hidden');
    if (dimasCard) dimasCard.classList.add('hidden');
    if (roleCard) {
      document.getElementById('welcome-badge-icon').innerHTML = '<span class="material-symbols-outlined">shield_person</span>';
    }
  } else {
    // Dimas - Anggota
    if (btnAddBill) btnAddBill.classList.add('hidden');
    if (dimasCard) dimasCard.classList.remove('hidden');
    if (roleCard) {
      document.getElementById('welcome-badge-icon').innerHTML = '<span class="material-symbols-outlined">person</span>';
    }
  }
}

function renderDashboardStats() {
  let totalAll = 0;
  let totalPaid = 0;
  let unpaidParts = 0;
  let paidParts = 0;
  let dimasTotalDue = 0;

  state.bills.forEach(bill => {
    totalAll += bill.totalAmount;
    bill.shares.forEach(s => {
      if (s.status === 'Lunas') {
        totalPaid += s.amount;
        paidParts++;
      } else {
        unpaidParts++;
        if (s.userId === 'u2') {
          dimasTotalDue += s.amount;
        }
      }
    });
  });

  const progressPercent = totalAll > 0 ? ((totalPaid / totalAll) * 100).toFixed(1) : 0;

  const statTotal = document.getElementById('stat-total-tagihan');
  const statPaid = document.getElementById('stat-total-terkumpul');
  const statProgText = document.getElementById('stat-progress-text');
  const statProgBar = document.getElementById('stat-progress-bar');
  const statUnpaidCount = document.getElementById('stat-unpaid-count');
  const statPaidCount = document.getElementById('stat-paid-count');
  const dimasDueEl = document.getElementById('dimas-total-due');

  if (statTotal) statTotal.textContent = formatRupiah(totalAll);
  if (statPaid) statPaid.textContent = formatRupiah(totalPaid);
  if (statProgText) statProgText.textContent = `${progressPercent}% Terkumpul`;
  if (statProgBar) statProgBar.style.width = `${progressPercent}%`;
  if (statUnpaidCount) statUnpaidCount.textContent = `${unpaidParts} Bagian`;
  if (statPaidCount) statPaidCount.textContent = `${paidParts} Bagian`;
  if (dimasDueEl) dimasDueEl.textContent = formatRupiah(dimasTotalDue);
}

function renderBillsList() {
  const container = document.getElementById('bills-container');
  if (!container) return;

  const activeBillsCount = document.getElementById('active-bills-count');
  if (activeBillsCount) activeBillsCount.textContent = state.bills.length;

  container.innerHTML = '';

  const filteredBills = state.bills.filter(bill => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'unpaid') {
      return bill.shares.some(s => s.status === 'Belum Bayar' || s.status === 'Terlambat');
    }
    if (activeFilter === 'pending') {
      return bill.shares.some(s => s.status === 'Menunggu Konfirmasi');
    }
    if (activeFilter === 'paid') {
      return bill.shares.every(s => s.status === 'Lunas');
    }
    return true;
  });

  if (filteredBills.length === 0) {
    container.innerHTML = `
      <div class="bg-surface-containerLowest p-8 rounded-3xl border border-outline-variant text-center space-y-2">
        <span class="material-symbols-outlined text-4xl text-primary/40">filter_list_off</span>
        <p class="text-xs font-bold text-onSurface">Tidak ada tagihan yang cocok</p>
        <p class="text-[11px] text-onSurface-variant">Silakan ubah filter pencarian di atas.</p>
      </div>
    `;
    return;
  }

  filteredBills.forEach(bill => {
    const payer = state.users.find(u => u.id === bill.payerId) || state.users[0];
    const totalPaidShares = bill.shares.filter(s => s.status === 'Lunas').length;
    const totalShares = bill.shares.length;
    const isAllPaid = totalPaidShares === totalShares;

    // Check current active user's share in this bill
    const myShare = bill.shares.find(s => s.userId === state.activeUserId);
    const hasPendingClaims = bill.shares.some(s => s.status === 'Menunggu Konfirmasi');

    // Due badge logic
    let dueBadgeClass = 'bg-pink-100 text-pink-700';
    let dueText = bill.dueDateFormatted;
    if (bill.dueDay <= 25) {
      dueBadgeClass = 'bg-amber-100 text-amber-800 border border-amber-200';
      dueText = `${bill.dueDay} Okt — Tinggal 3 Hari`;
    }

    const card = document.createElement('div');
    card.className = 'bg-surface-containerLowest rounded-3xl p-4 border border-outline-variant shadow-xs touch-card space-y-3.5';

    card.innerHTML = `
      <!-- Card Header -->
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 rounded-2xl bg-primary-container/60 text-primary flex items-center justify-center border border-pink-200">
            <span class="material-symbols-outlined text-2xl">${bill.categoryIcon || 'receipt'}</span>
          </div>
          <div>
            <h4 class="font-extrabold text-sm text-onSurface tracking-tight">${bill.name}</h4>
            <div class="flex items-center gap-2 mt-0.5">
              <span class="text-[11px] text-onSurface-variant flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[12px] text-primary">person</span>
                Ditalangi: <strong>${payer.name.split(' ')[0]}</strong>
              </span>
              <span class="text-[10px] text-pink-300">•</span>
              <span class="text-[11px] text-onSurface-variant font-medium">Bulan Ini</span>
            </div>
          </div>
        </div>

        <div class="text-right">
          <span class="text-base font-extrabold text-onSurface tracking-tight block">${formatRupiah(bill.totalAmount)}</span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${dueBadgeClass} inline-block mt-0.5">
            ${dueText}
          </span>
        </div>
      </div>

      <!-- Bill Progress Bar -->
      <div class="space-y-1">
        <div class="flex justify-between text-[11px]">
          <span class="text-onSurface-variant">Status Pelunasan</span>
          <span class="font-bold ${isAllPaid ? 'text-emerald-600' : 'text-primary'}">
            ${totalPaidShares} dari ${totalShares} Orang Lunas
          </span>
        </div>
        <div class="w-full h-1.5 bg-pink-100 rounded-full overflow-hidden">
          <div class="h-full bg-primary rounded-full transition-all duration-500" style="width: ${(totalPaidShares / totalShares) * 100}%"></div>
        </div>
      </div>

      <!-- Members Participant Breakdown Row -->
      <div class="pt-2 border-t border-pink-100/70">
        <p class="text-[11px] font-bold text-onSurface-variant mb-2">Rincian Bagian Penghuni:</p>
        <div class="space-y-2">
          ${bill.shares.map(share => {
            const member = state.users.find(u => u.id === share.userId);
            if (!member) return '';

            let badgeHtml = '';
            let actionBtnHtml = '';

            if (share.status === 'Lunas') {
              badgeHtml = `<span class="badge-lunas text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[11px]">check_circle</span> Lunas
              </span>`;
            } else if (share.status === 'Menunggu Konfirmasi') {
              badgeHtml = `<span class="badge-menunggu text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[11px]">schedule</span> Menunggu Konfirmasi
              </span>`;
              
              // If logged in as Rina (Penalang), show action button to verify!
              if (state.activeUserId === 'u1') {
                actionBtnHtml = `
                  <button onclick="openVerifySheet('${bill.id}', '${share.userId}')" class="text-[11px] font-bold bg-amber-600 text-white px-2.5 py-1 rounded-lg hover:bg-amber-700 active:scale-95 transition-all shadow-xs flex items-center gap-0.5">
                    <span>Tinjau Bukti</span>
                    <span class="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </button>
                `;
              }
            } else if (share.status === 'Terlambat') {
              badgeHtml = `<span class="badge-terlambat text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[11px]">error</span> Terlambat
              </span>`;
            } else {
              // Belum Bayar
              badgeHtml = `<span class="badge-belum text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-0.5">
                <span class="material-symbols-outlined text-[11px]">pending</span> Belum Bayar
              </span>`;
            }

            return `
              <div class="flex items-center justify-between p-2 rounded-xl bg-surface-containerLow border border-pink-100/60">
                <div class="flex items-center gap-2">
                  <img src="${member.avatar}" alt="${member.name}" class="w-6 h-6 rounded-full object-cover">
                  <div>
                    <span class="text-xs font-semibold text-onSurface block leading-tight">${member.name}</span>
                    <span class="text-[10px] text-onSurface-variant">${formatRupiah(share.amount)}</span>
                  </div>
                </div>
                <div class="flex items-center gap-1.5">
                  ${badgeHtml}
                  ${actionBtnHtml}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Contextual Action Bar at Card Bottom -->
      ${renderBillCardBottomActions(bill, myShare, hasPendingClaims)}
    `;

    container.appendChild(card);
  });
}

function renderBillCardBottomActions(bill, myShare, hasPendingClaims) {
  // 1. If active user is Dimas (Anggota) and Dimas's share is Belum Bayar / Terlambat
  if (state.activeUserId === 'u2' && myShare && (myShare.status === 'Belum Bayar' || myShare.status === 'Terlambat')) {
    return `
      <div class="pt-2">
        <button onclick="openPayModal('${bill.id}')" class="w-full py-2.5 bg-primary hover:bg-secondary text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 shadow-md shadow-pink-500/20 active:scale-95 transition-all">
          <span class="material-symbols-outlined text-base">payments</span>
          <span>Bayar Bagian Saya (${formatRupiah(myShare.amount)})</span>
        </button>
      </div>
    `;
  }

  // 2. If active user is Rina and there is a pending claim
  if (state.activeUserId === 'u1' && hasPendingClaims) {
    const pendingShare = bill.shares.find(s => s.status === 'Menunggu Konfirmasi');
    return `
      <div class="pt-2">
        <button onclick="openVerifySheet('${bill.id}', '${pendingShare.userId}')" class="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1 shadow-sm active:scale-95 transition-all">
          <span class="material-symbols-outlined text-base">notifications_active</span>
          <span>Ada 1 Klaim Pembayaran Menunggu Konfirmasi</span>
        </button>
      </div>
    `;
  }

  // Otherwise no heavy action button needed
  return '';
}

// =============================================================================
// 6. HISTORY & AUDIT TRAIL RENDERING (TAB 2)
// =============================================================================

let activeHistoryPeriod = 'september-2026';

function switchHistoryPeriod(periodKey) {
  activeHistoryPeriod = periodKey;
  document.querySelectorAll('.hist-period-btn').forEach(btn => {
    if (btn.dataset.period === periodKey) {
      btn.className = 'hist-period-btn active flex-1 py-2 px-3 bg-surface-containerLowest border-2 border-primary text-primary font-bold text-xs rounded-xl transition-all shadow-xs text-center';
    } else {
      btn.className = 'hist-period-btn flex-1 py-2 px-3 bg-surface-containerLowest border border-outline-variant text-onSurface-variant font-medium text-xs rounded-xl transition-all text-center';
    }
  });
  renderHistoryView();
}

function renderHistoryView() {
  const listEl = document.getElementById('history-bills-list');
  const auditEl = document.getElementById('audit-log-container');
  const titleEl = document.getElementById('hist-period-title');
  const totalEl = document.getElementById('hist-total-amount');

  if (titleEl) {
    titleEl.textContent = activeHistoryPeriod === 'september-2026' ? 'Periode September 2026' : 'Periode Agustus 2026';
  }

  const items = state.historyBills[activeHistoryPeriod] || [];
  let total = 0;
  items.forEach(i => total += i.total);
  if (totalEl) totalEl.textContent = formatRupiah(total);

  if (listEl) {
    listEl.innerHTML = items.map(item => `
      <div class="bg-surface-containerLowest p-3.5 rounded-2xl border border-outline-variant flex items-center justify-between shadow-xs">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
            <span class="material-symbols-outlined text-lg">${item.icon}</span>
          </div>
          <div>
            <h4 class="font-bold text-xs text-onSurface">${item.name}</h4>
            <p class="text-[10px] text-onSurface-variant">Lunas pada: ${item.paidDate}</p>
          </div>
        </div>
        <div class="text-right">
          <span class="font-bold text-xs text-onSurface block">${formatRupiah(item.total)}</span>
          <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mt-0.5">Lunas 100%</span>
        </div>
      </div>
    `).join('');
  }

  // Audit Logs
  if (auditEl) {
    auditEl.innerHTML = state.statusLogs.map(log => `
      <div class="p-2.5 rounded-xl bg-surface-containerLow border border-pink-100/70 space-y-1">
        <div class="flex items-center justify-between text-[10px] text-onSurface-variant font-medium">
          <span class="font-bold text-primary">${log.actor}</span>
          <span>${log.time}</span>
        </div>
        <p class="text-[11px] text-onSurface">${log.action}</p>
      </div>
    `).join('');
  }
}

// =============================================================================
// 7. NOTIFICATIONS & ROOMMATES (TAB 3)
// =============================================================================

function renderNotifications() {
  const listEl = document.getElementById('notifications-list');
  const badgeEl = document.getElementById('unread-badge');
  const navDotEl = document.getElementById('nav-unread-dot');

  const unreadCount = state.notifications.filter(n => !n.read).length;

  if (badgeEl) {
    if (unreadCount > 0) {
      badgeEl.classList.remove('hidden');
      badgeEl.textContent = unreadCount;
    } else {
      badgeEl.classList.add('hidden');
    }
  }

  if (navDotEl) {
    if (unreadCount > 0) {
      navDotEl.classList.remove('hidden');
    } else {
      navDotEl.classList.add('hidden');
    }
  }

  if (listEl) {
    listEl.innerHTML = state.notifications.map(n => `
      <div class="p-3 rounded-2xl border ${n.read ? 'bg-surface-containerLowest border-outline-variant/60' : 'bg-pink-50/70 border-pink-200'} space-y-1 shadow-xs">
        <div class="flex items-center justify-between">
          <span class="font-bold text-xs ${n.read ? 'text-onSurface' : 'text-primary'} flex items-center gap-1">
            ${!n.read ? '<span class="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>' : ''}
            ${n.title}
          </span>
          <span class="text-[10px] text-onSurface-variant">${n.time}</span>
        </div>
        <p class="text-[11px] text-onSurface-variant leading-relaxed">${n.body}</p>
      </div>
    `).join('');
  }
}

function markAllNotificationsAsRead() {
  state.notifications.forEach(n => n.read = true);
  saveState();
  renderNotifications();
  showToast('Semua notifikasi ditandai telah dibaca', 'info', 'done_all');
}

function renderRoommates() {
  const container = document.getElementById('roommates-list');
  if (!container) return;

  container.innerHTML = state.users.map(u => `
    <div class="py-2.5 flex items-center justify-between">
      <div class="flex items-center gap-2.5">
        <img src="${u.avatar}" alt="${u.name}" class="w-9 h-9 rounded-full object-cover border border-pink-200">
        <div>
          <p class="font-bold text-xs text-onSurface leading-tight">${u.name}</p>
          <p class="text-[10px] text-onSurface-variant">${u.room} • ${u.bankInfo.split(' ')[0]}</p>
        </div>
      </div>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full ${u.id === 'u1' ? 'bg-primary text-white' : 'bg-pink-100 text-pink-700'}">
        ${u.role}
      </span>
    </div>
  `).join('');
}

// =============================================================================
// 8. SIMULASI ENGINE PENGINGAT (F6 PRD)
// =============================================================================

function triggerReminder(type) {
  const now = new Date();
  const timeStr = 'Hari ini, 09:30 WIB';

  if (type === 'h3') {
    state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: '⏰ Pengingat Jatuh Tempo (H-3)',
      body: 'Pengingat dikirim ke Dimas & Siti: Tagihan WiFi MyRepublic akan jatuh tempo dalam 3 hari (28 Okt 2026). Segera selesaikan pembayaran.',
      time: timeStr,
      read: false,
      type: 'reminder'
    });
    showToast('Simulasi Pengingat H-3 berhasil dikirim ke anggota!', 'warning', 'schedule');
  } else if (type === 'h0') {
    state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: '🚨 Hari Ini Jatuh Tempo (H-0)!',
      body: 'Hari ini adalah batas akhir pembayaran tagihan Listrik Token PLN. Mohon segera transfer ke rekening penalang Rina Amelia.',
      time: timeStr,
      read: false,
      type: 'urgent'
    });
    showToast('Simulasi Hari Jatuh Tempo (H-0) dikirim via Push Notif!', 'error', 'notifications_active');
  } else if (type === 'overdue') {
    // Mark unpaid bills as Terlambat
    let markedCount = 0;
    state.bills.forEach(bill => {
      bill.shares.forEach(s => {
        if (s.status === 'Belum Bayar') {
          s.status = 'Terlambat';
          markedCount++;
        }
      });
    });

    state.notifications.unshift({
      id: 'notif-' + Date.now(),
      title: '⚠️ Status Terlambat (H+1)',
      body: `Sebanyak ${markedCount} bagian tagihan melewati jatuh tempo dan statusnya otomatis berubah menjadi Terlambat.`,
      time: timeStr,
      read: false,
      type: 'overdue'
    });

    state.statusLogs.unshift({
      time: timeStr,
      actor: 'Sistem Pengingat Otomatis',
      action: `Status tagihan tertunggak diubah menjadi Terlambat.`
    });

    showToast(`Status tagihan tertunggak otomatis diubah menjadi Terlambat!`, 'error', 'warning');
  }

  saveState();
  renderApp();
}

// =============================================================================
// 9. FORM TAMBAH TAGIHAN & PEMBAGIAN ENGINE (F3, F4, EC-02)
// =============================================================================

function openAddBillModal() {
  const modal = document.getElementById('modal-add-bill');
  if (!modal) return;

  // Reset form
  document.getElementById('input-bill-name').value = '';
  document.getElementById('input-bill-amount').value = '';
  document.getElementById('input-bill-due-day').value = '28';
  document.getElementById('input-bill-payer').value = state.activeUserId;
  setSplitMode('equal');

  renderSplitParticipantsChecklist();
  modal.classList.add('active');
}

function closeAddBillModal() {
  const modal = document.getElementById('modal-add-bill');
  if (modal) modal.classList.remove('active');
}

function setSplitMode(mode) {
  currentSplitMode = mode;
  const btnEqual = document.getElementById('btn-split-equal');
  const btnManual = document.getElementById('btn-split-manual');
  const equalNote = document.getElementById('split-equal-note');
  const manualWarning = document.getElementById('split-manual-warning');

  if (mode === 'equal') {
    btnEqual.className = 'px-2.5 py-1 text-[11px] font-bold rounded-md bg-primary text-white transition-all';
    btnManual.className = 'px-2.5 py-1 text-[11px] font-medium text-onSurface-variant hover:text-onSurface rounded-md transition-all';
    equalNote.classList.remove('hidden');
    manualWarning.classList.add('hidden');
  } else {
    btnEqual.className = 'px-2.5 py-1 text-[11px] font-medium text-onSurface-variant hover:text-onSurface rounded-md transition-all';
    btnManual.className = 'px-2.5 py-1 text-[11px] font-bold rounded-md bg-primary text-white transition-all';
    equalNote.classList.add('hidden');
    manualWarning.classList.remove('hidden');
  }

  renderSplitParticipantsChecklist();
}

function renderSplitParticipantsChecklist() {
  const container = document.getElementById('split-participants-container');
  if (!container) return;

  const totalAmount = parseRupiah(document.getElementById('input-bill-amount')?.value || 0);
  const payerId = document.getElementById('input-bill-payer')?.value || 'u1';

  // Read currently selected participants
  container.innerHTML = state.users.map(u => {
    return `
      <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-containerLow border border-outline-variant/60">
        <label class="flex items-center gap-2 cursor-pointer flex-1">
          <input type="checkbox" name="split-member" value="${u.id}" checked onchange="updateSplitCalculations()" class="w-4 h-4 rounded text-primary focus:ring-primary">
          <div>
            <span class="font-bold text-xs text-onSurface block leading-tight">${u.name}</span>
            <span class="text-[10px] text-onSurface-variant">${u.id === payerId ? '⭐ Penalang Tagihan' : u.room}</span>
          </div>
        </label>
        <div class="text-right">
          ${currentSplitMode === 'equal' 
            ? `<span id="share-display-${u.id}" class="text-xs font-bold text-primary">Rp0</span>`
            : `<input type="text" id="share-input-${u.id}" oninput="formatCurrencyInput(this); updateManualBalanceStatus()" placeholder="Rp0" class="w-24 px-2 py-1 rounded-lg border border-outline-variant text-right text-xs font-bold bg-white">`
          }
        </div>
      </div>
    `;
  }).join('');

  updateSplitCalculations();
}

function toggleSelectAllMembers() {
  const checkboxes = document.querySelectorAll('input[name="split-member"]');
  const allChecked = Array.from(checkboxes).every(cb => cb.checked);
  checkboxes.forEach(cb => cb.checked = !allChecked);
  updateSplitCalculations();
}

/**
 * PRD Requirement F4 & EC-02:
 * Jika pembagian rata menghasilkan sisa rupiah (misal Rp100.000 / 3 = Rp33.333 sisa Rp1),
 * sisa dialokasikan kepada penalang tagihan agar total selalu sama 100%!
 */
function updateSplitCalculations() {
  const totalAmount = parseRupiah(document.getElementById('input-bill-amount')?.value || 0);
  const payerId = document.getElementById('input-bill-payer')?.value || 'u1';
  const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="split-member"]:checked'));
  const selectedIds = selectedCheckboxes.map(cb => cb.value);

  if (currentSplitMode === 'equal') {
    if (selectedIds.length === 0 || totalAmount <= 0) {
      state.users.forEach(u => {
        const el = document.getElementById(`share-display-${u.id}`);
        if (el) el.textContent = 'Rp0';
      });
      return;
    }

    const count = selectedIds.length;
    const baseShare = Math.floor(totalAmount / count);
    const remainder = totalAmount - (baseShare * count);

    state.users.forEach(u => {
      const el = document.getElementById(`share-display-${u.id}`);
      if (!el) return;

      if (!selectedIds.includes(u.id)) {
        el.textContent = 'Rp0 (Tidak ikut)';
        el.className = 'text-xs text-onSurface-variant/50 font-normal';
      } else {
        // If this user is payer and remainder exists, add remainder
        const userShare = (u.id === payerId && remainder > 0) ? (baseShare + remainder) : baseShare;
        el.textContent = formatRupiah(userShare) + (u.id === payerId && remainder > 0 ? ` (+Rp${remainder} sisa)` : '');
        el.className = 'text-xs font-bold text-primary';
      }
    });
  } else {
    // Manual split balance calculation
    updateManualBalanceStatus();
  }
}

function updateManualBalanceStatus() {
  const totalAmount = parseRupiah(document.getElementById('input-bill-amount')?.value || 0);
  const checkboxes = Array.from(document.querySelectorAll('input[name="split-member"]:checked'));
  let currentSum = 0;

  checkboxes.forEach(cb => {
    const input = document.getElementById(`share-input-${cb.value}`);
    if (input) {
      currentSum += parseRupiah(input.value);
    }
  });

  const diff = totalAmount - currentSum;
  const statusEl = document.getElementById('manual-balance-status');
  if (statusEl) {
    if (diff === 0 && totalAmount > 0) {
      statusEl.textContent = 'Pas 100% (Rp0)';
      statusEl.className = 'font-bold text-emerald-600';
    } else if (diff > 0) {
      statusEl.textContent = `Kurang ${formatRupiah(diff)}`;
      statusEl.className = 'font-bold text-rose-600';
    } else {
      statusEl.textContent = `Lebih ${formatRupiah(Math.abs(diff))}`;
      statusEl.className = 'font-bold text-rose-600';
    }
  }
}

function handleSaveBill(e) {
  e.preventDefault();

  const name = document.getElementById('input-bill-name').value.trim();
  const category = document.getElementById('input-bill-category').value;
  const totalAmount = parseRupiah(document.getElementById('input-bill-amount').value);
  const dueDay = parseInt(document.getElementById('input-bill-due-day').value, 10);
  const payerId = document.getElementById('input-bill-payer').value;

  if (!name || totalAmount <= 0) {
    showToast('Mohon isi nama tagihan dan nominal yang valid!', 'error', 'error');
    return;
  }

  const selectedCheckboxes = Array.from(document.querySelectorAll('input[name="split-member"]:checked'));
  if (selectedCheckboxes.length === 0) {
    showToast('Pilih minimal satu anggota yang ikut patungan!', 'error', 'error');
    return;
  }

  const selectedIds = selectedCheckboxes.map(cb => cb.value);

  // Category Icon Mapping
  const icons = {
    listrik: 'bolt',
    wifi: 'wifi',
    air: 'water_drop',
    hiburan: 'movie',
    kebersihan: 'cleaning_services',
    lainnya: 'receipt'
  };

  const shares = [];

  if (currentSplitMode === 'equal') {
    const count = selectedIds.length;
    const baseShare = Math.floor(totalAmount / count);
    const remainder = totalAmount - (baseShare * count);

    selectedIds.forEach(userId => {
      const shareAmount = (userId === payerId && remainder > 0) ? (baseShare + remainder) : baseShare;
      shares.push({
        userId,
        amount: shareAmount,
        status: userId === payerId ? 'Lunas' : 'Belum Bayar',
        paidAt: userId === payerId ? '2026-10-01 08:00 WIB' : null
      });
    });
  } else {
    // Manual
    let manualSum = 0;
    for (const userId of selectedIds) {
      const input = document.getElementById(`share-input-${userId}`);
      const amt = parseRupiah(input ? input.value : 0);
      manualSum += amt;
      shares.push({
        userId,
        amount: amt,
        status: userId === payerId ? 'Lunas' : 'Belum Bayar',
        paidAt: userId === payerId ? '2026-10-01 08:00 WIB' : null
      });
    }

    if (manualSum !== totalAmount) {
      showToast(`Total pembagian (${formatRupiah(manualSum)}) harus tepat sama dengan total tagihan (${formatRupiah(totalAmount)})!`, 'error', 'error');
      return;
    }
  }

  const newBill = {
    id: 'b-' + Date.now(),
    name,
    category,
    categoryIcon: icons[category] || 'receipt',
    totalAmount,
    dueDay,
    dueDateFormatted: `${dueDay} Okt 2026`,
    payerId,
    splitMode: currentSplitMode,
    shares
  };

  state.bills.unshift(newBill);

  state.statusLogs.unshift({
    time: 'Baru saja',
    actor: state.users.find(u => u.id === state.activeUserId)?.name || 'Admin',
    action: `Membuat tagihan baru "${name}" sebesar ${formatRupiah(totalAmount)}.`
  });

  saveState();
  renderApp();
  closeAddBillModal();
  showToast(`Tagihan "${name}" berhasil dibuat!`, 'success', 'check_circle');
}

// =============================================================================
// 10. PAYMENT LIFECYCLE & BOTTOM SHEET (F5 PRD)
// =============================================================================

// FLOW ANGGOTA (DIMAS)
function openPayModal(billId) {
  pendingPayTarget = { billId };
  const bill = state.bills.find(b => b.id === billId);
  if (!bill) return;

  const myShare = bill.shares.find(s => s.userId === state.activeUserId);
  const titleEl = document.getElementById('pay-bill-title');
  const amountEl = document.getElementById('pay-amount-display');

  if (titleEl) titleEl.textContent = bill.name;
  if (amountEl) amountEl.textContent = formatRupiah(myShare ? myShare.amount : 0);

  const modal = document.getElementById('modal-pay-claim');
  if (modal) modal.classList.add('active');
}

function closePayModal() {
  const modal = document.getElementById('modal-pay-claim');
  if (modal) modal.classList.remove('active');
  pendingPayTarget = null;
}

function copyAccountNo(acc) {
  navigator.clipboard.writeText(acc).then(() => {
    showToast('Nomor rekening berhasil disalin ke clipboard!', 'success', 'content_copy');
  }).catch(() => {
    showToast('Nomor rekening: ' + acc, 'info', 'content_copy');
  });
}

function submitPaymentClaim() {
  if (!pendingPayTarget) return;

  const bill = state.bills.find(b => b.id === pendingPayTarget.billId);
  if (!bill) return;

  const share = bill.shares.find(s => s.userId === state.activeUserId);
  if (!share) return;

  // Update status to Menunggu Konfirmasi with dummy receipt
  share.status = 'Menunggu Konfirmasi';
  share.submittedAt = 'Baru saja';
  share.receiptUrl = DUMMY_RECEIPT_IMG;

  const userName = state.users.find(u => u.id === state.activeUserId)?.name || 'Anggota';

  // Add notification to system for Rina
  state.notifications.unshift({
    id: 'notif-' + Date.now(),
    title: 'Klaim Pembayaran Baru',
    body: `${userName} mengklaim telah membayar ${formatRupiah(share.amount)} untuk ${bill.name}. Perlu konfirmasi penalang.`,
    time: 'Baru saja',
    read: false,
    type: 'claim'
  });

  // Append to audit log
  state.statusLogs.unshift({
    time: 'Baru saja',
    actor: userName,
    action: `Mengklaim sudah transfer ${formatRupiah(share.amount)} untuk ${bill.name}.`
  });

  saveState();
  renderApp();
  closePayModal();
  showToast(`Klaim pembayaran untuk ${bill.name} berhasil dikirim ke penalang!`, 'success', 'send');
}

// FLOW PENALANG (RINA)
function openVerifySheet(billId, userId) {
  pendingVerifyTarget = { billId, userId };
  const bill = state.bills.find(b => b.id === billId);
  if (!bill) return;

  const member = state.users.find(u => u.id === userId);
  const share = bill.shares.find(s => s.userId === userId);
  if (!member || !share) return;

  document.getElementById('verify-member-name').textContent = member.name;
  document.getElementById('verify-member-avatar').src = member.avatar;
  document.getElementById('verify-bill-name').textContent = `${bill.name} (${state.currentPeriod})`;
  document.getElementById('verify-amount-due').textContent = formatRupiah(share.amount);
  document.getElementById('verify-receipt-img').src = share.receiptUrl || DUMMY_RECEIPT_IMG;

  // Reset reject drawer
  cancelRejectAction();

  const sheet = document.getElementById('sheet-verify-payment');
  if (sheet) sheet.classList.add('active');
}

function closeVerifySheet() {
  const sheet = document.getElementById('sheet-verify-payment');
  if (sheet) sheet.classList.remove('active');
  pendingVerifyTarget = null;
}

function confirmPaymentAsPaid() {
  if (!pendingVerifyTarget) return;

  const bill = state.bills.find(b => b.id === pendingVerifyTarget.billId);
  if (!bill) return;

  const share = bill.shares.find(s => s.userId === pendingVerifyTarget.userId);
  const member = state.users.find(u => u.id === pendingVerifyTarget.userId);
  if (!share) return;

  share.status = 'Lunas';
  share.paidAt = 'Baru saja';
  share.confirmedBy = 'Rina Amelia (Penalang)';

  state.notifications.unshift({
    id: 'notif-' + Date.now(),
    title: 'Pembayaran Dikonfirmasi Lunas',
    body: `Pembayaran ${member.name} sebesar ${formatRupiah(share.amount)} untuk ${bill.name} telah dikonfirmasi LUNAS oleh penalang.`,
    time: 'Baru saja',
    read: false,
    type: 'success'
  });

  state.statusLogs.unshift({
    time: 'Baru saja',
    actor: 'Rina Amelia',
    action: `Mengonfirmasi Lunas pembayaran ${member.name} pada ${bill.name}.`
  });

  saveState();
  renderApp();
  closeVerifySheet();
  showToast(`Pembayaran ${member.name} berhasil dikonfirmasi LUNAS!`, 'success', 'check_circle');
}

function confirmPaymentDirectCash() {
  confirmPaymentAsPaid();
}

function showRejectPanel() {
  document.getElementById('rejection-reason-panel').classList.remove('hidden');
  document.getElementById('verify-action-buttons').classList.add('hidden');
}

function cancelRejectAction() {
  document.getElementById('rejection-reason-panel').classList.add('hidden');
  document.getElementById('verify-action-buttons').classList.remove('hidden');
}

function confirmRejectAction() {
  if (!pendingVerifyTarget) return;

  const bill = state.bills.find(b => b.id === pendingVerifyTarget.billId);
  if (!bill) return;

  const share = bill.shares.find(s => s.userId === pendingVerifyTarget.userId);
  const member = state.users.find(u => u.id === pendingVerifyTarget.userId);
  const reason = document.getElementById('select-reject-reason').value;

  // Revert back to Belum Bayar
  share.status = 'Belum Bayar';

  state.notifications.unshift({
    id: 'notif-' + Date.now(),
    title: 'Klaim Pembayaran Ditolak',
    body: `Klaim pembayaran ${member.name} untuk ${bill.name} ditolak oleh penalang. Alasan: "${reason}".`,
    time: 'Baru saja',
    read: false,
    type: 'error'
  });

  state.statusLogs.unshift({
    time: 'Baru saja',
    actor: 'Rina Amelia',
    action: `Menolak klaim pembayaran ${member.name} pada ${bill.name}. Alasan: ${reason}.`
  });

  saveState();
  renderApp();
  closeVerifySheet();
  showToast(`Klaim pembayaran ${member.name} ditolak (${reason})`, 'error', 'cancel');
}

// =============================================================================
// 11. LIGHTBOX PREVIEW BUKTI TRANSFER
// =============================================================================

function openReceiptLightbox() {
  const modal = document.getElementById('modal-lightbox');
  const img = document.getElementById('lightbox-img');
  const src = document.getElementById('verify-receipt-img')?.src || DUMMY_RECEIPT_IMG;
  if (img) img.src = src;
  if (modal) modal.classList.add('active');
}

function closeReceiptLightbox() {
  const modal = document.getElementById('modal-lightbox');
  if (modal) modal.classList.remove('active');
}

function openGroupInfoModal() {
  showToast('Grup: Kos Griya Melati 4A (4 dari maks 8 anggota terdaftar)', 'info', 'home');
}

function openProfileModal() {
  switchTab('notifikasi');
  const roommates = document.getElementById('roommates-list');
  if (roommates) roommates.scrollIntoView({ behavior: 'smooth' });
}

// =============================================================================
// 12. INITIALIZATION ON PAGE LOAD
// =============================================================================

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderApp();
});
