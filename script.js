// Hardcoded Data (Restored)
const API_URL = "https://script.google.com/macros/s/AKfycbxEn0_QHCdDmA24QNrXOfFVg2lSlvdt9R7opPpLmOrxEZGxm0L7t73CWneKlaHHo8ZV/exec";
const rawData = {
    products: [
        ["產品主分類", "產品類型", "產品名稱", "單價", "圖片名稱(鋁材圖配件2D圖)", "圖片名稱(配件3D圖)", "單位", "狀態", "規格描述"],
        ["鋁材", "20系列", "2020型", 1.6, "2020型.png", "", "cm", "", ""],
        ["鋁材", "20系列", "2040型", 1.6, "2040型.png", "", "cm", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["鋁材", "30系列", "3030輕型", 1.6, "3030輕型.png", "", "cm", "", ""],
        ["鋁材", "30系列", "3060輕型", 1.6, "3060輕型.png", "", "cm", "", ""],
        ["鋁材", "30系列", "3030重型", 1.6, "3030重型.png", "", "cm", "", ""],
        ["鋁材", "30系列", "3060重型", 1.6, "3060重型.png", "", "cm", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["鋁材", "40系列", "4040輕型", 1.6, "4040輕型.png", "", "cm", "", ""],
        ["鋁材", "40系列", "4080輕型", 1.6, "4080輕型.png", "", "cm", "", ""],
        ["鋁材", "40系列", "4040重型", 1.6, "4040重型.png", "", "cm", "", ""],
        ["鋁材", "40系列", "4080重型", 1.6, "4080重型.png", "", "cm", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["配件", "20系列", "M4六角螺絲", 1, "20M4六角螺絲2D.png", "", "個", "", ""],
        ["配件", "20系列", "M4螺母", 1, "20M4螺母2D.png", "", "個", "", ""],
        ["配件", "20系列", "三角連結塊(含M4螺絲x2,M4螺母x2)", 20, "20三角連結塊2D.png", "", "組", "", ""],
        ["配件", "20系列", "平板連結片(含M4螺絲x2,M4螺母x2)", 20, "20平板連結片2D.png", "", "組", "", ""],
        ["配件", "20系列", "L層板架(含M4螺絲x2,M4螺母x2)", 20, "20L層板架2D.png", "", "組", "", ""],
        ["配件", "20系列", "轉向連結塊(含M4螺絲x2,M4螺母x2)", 15, "20轉向連結塊2D.png", "", "組", "", ""],
        ["配件", "20系列", "絞鍊(含M4螺絲x4,M4螺母x4)", 20, "20絞鍊2D.png", "", "組", "", ""],
        ["配件", "20系列", "隱式層板架", 10, "20隱式層板架2D.png", "", "個", "", ""],
        ["配件", "20系列", "合金把手(含M4螺絲x2,M4螺母x2)", 30, "20合金把手2D.png", "", "組", "", ""],
        ["配件", "20系列", "3mm六角板手", 2, "203mm六角板手2D.png", "", "支", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["配件", "30系列", "M6六角螺絲", 1, "30M6六角螺絲2D.png", "", "個", "", ""],
        ["配件", "30系列", "M6螺母", 1, "30M6螺母2D.png", "", "個", "", ""],
        ["配件", "30系列", "三角連結塊(含M6螺絲x2,M6螺母x2)", 20, "30三角連結塊2D.png", "", "組", "", ""],
        ["配件", "30系列", "平板連結片(含M6螺絲x2,M6螺母x2)", 20, "30平板連結片2D.png", "", "組", "", ""],
        ["配件", "30系列", "L層板架(含M6螺絲x2,M6螺母x2)", 25, "30L層板架2D.png", "", "組", "", ""],
        ["配件", "30系列", "轉向連結塊(含M6螺絲x2,M6螺母x2)", 15, "30轉向連結塊2D.png", "", "組", "", ""],
        ["配件", "30系列", "180度連接板(含M6螺絲x4,M6螺母x4)", 40, "30180度連接板2D.png", "", "組", "", ""],
        ["配件", "30系列", "靜音輪腳架固定器(含M6螺絲x2,M6螺母x2)", 20, "30靜音輪腳架固定器2D.png", "", "組", "", ""],
        ["配件", "30系列", "絞鍊(含M6螺絲x4,M6螺母x4)", 30, "30絞鍊2D.png", "", "組", "", ""],
        ["配件", "30系列", "隱式層板架", 15, "30隱式層板架2D.png", "", "個", "", ""],
        ["配件", "30系列", "180度連結器(含M6螺絲x2,M6螺母x2)", 50, "30180度連結器2D.png", "", "組", "", ""],
        ["配件", "30系列", "金屬端蓋(含M6平頭螺絲x1)", 10, "30金屬端蓋2D.png", "", "組", "", ""],
        ["配件", "30系列", "靜音輪", 50, "30靜音輪2D.png", "", "個", "", ""],
        ["配件", "30系列", "腳架", 30, "30腳架2D.png", "", "個", "", ""],
        ["配件", "30系列", "合金把手(含M6螺絲x2,M6螺母x2)", 40, "30合金把手2D.png", "", "組", "", ""],
        ["配件", "30系列", "5mm六角板手", 2, "305mm六角板手2D.png", "", "個", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["配件", "40系列", "M8六角螺絲", 1, "40M8六角螺絲2D.png", "", "個", "", ""],
        ["配件", "40系列", "M8螺母", 1, "40M8螺母2D.png", "", "個", "", ""],
        ["配件", "40系列", "三角連結塊(含M8螺絲x2,M8螺母x2)", 20, "40三角連結塊2D.png", "", "組", "", ""],
        ["配件", "40系列", "平板連結片(含M8螺絲x2,M8螺母x2)", 30, "40平板連結片2D.png", "", "組", "", ""],
        ["配件", "40系列", "L層板架(含M8螺絲x2,M8螺母x2)", 35, "40L層板架2D.png", "", "組", "", ""],
        ["配件", "40系列", "轉向連結塊(含M8螺絲x2,M8螺母x2)", 15, "40轉向連結塊2D.png", "", "組", "", ""],
        ["配件", "40系列", "180度連接板(含M8螺絲x4,M8螺母x4)", 50, "40180度連接板2D.png", "", "組", "", ""],
        ["配件", "40系列", "靜音輪腳架固定器(含M8螺絲x2,M8螺母x2)", 20, "40靜音輪腳架固定器2D.png", "", "組", "", ""],
        ["配件", "40系列", "絞鍊(含M8螺絲x4,M8螺母x4)", 35, "40絞鍊2D.png", "", "組", "", ""],
        ["配件", "40系列", "隱式層板架", 20, "40隱式層板架2D.png", "", "個", "", ""],
        ["配件", "40系列", "180度連結器(含M8螺絲x2,M8螺母x2)", 50, "40180度連結器2D.png", "", "組", "", ""],
        ["配件", "40系列", "金屬端蓋(含M8平頭螺絲x1)", 10, "40金屬端蓋2D.png", "", "組", "", ""],
        ["配件", "40系列", "靜音輪", 50, "40靜音輪2D.png", "", "個", "", ""],
        ["配件", "40系列", "腳架", 30, "40腳架2D.png", "", "個", "", ""],
        ["配件", "40系列", "合金把手組(含M8螺絲x2,M8螺母x2)", 50, "40合金把手組2D.png", "", "組", "", ""],
        ["配件", "40系列", "6mm六角板手", 2, "406mm六角板手2D.png", "", "個", "", ""]
    ],
    projects: [
        ["ID", "專案名稱", "描述", "Youtube", "PDF", "情境圖", "完成圖", "step1", "step2", "step3", "step4"],
        ["LUTU-01", "螃蟹車", "靈活移動的板車平台 - 適合搬運重物或作為移動底座使用", "#", "#", "deco1.png", "2040型.png", "2040型.png", "2040型.png", "2040型.png", "2040型.png"],
        ["LUTU-03", "側掛衣架", "", "", "", "deco3.png", "", "", "", "", ""],
        ["LUTU-02", "茶几", "", "", "", "deco2.png", "", "", "", "", ""],
        ["LUTU-04", "地燈", "", "", "", "deco4.png", "", "", "", "", ""],
        ["LUTU-05", "手推車", "", "", "", "deco5.png", "", "", "", "", ""],
        ["LUTU-06", "移動桌腳", "", "", "", "deco6.png", "", "", "", "", ""]
    ],
    customCases: [
        ["CASE", "專案名稱", "描述", "PDF", "材料圖", "正面", "側面", "客戶現場"],
        ["CASE-01", "3030重型-床頭櫃", "n採用工業級鋁型材打造，n比傳統全木櫃結構更穩固紮實，n徹底告別搬運後易鬆散搖晃的煩惱。n鋁製骨架天生具備防水、n防鏽且無蟲蛀風險的特性，n搭配耐磨好清潔的系統板材，n日常保養輕鬆無負擔。n獨特的開放式骨架設計，n大幅降低了櫃體的視覺厚重感，n通透輕盈的造型，n是小空間也能擁有的質感收納首選。", "#", "n【3030鋁材重型】 n44cm x14支 n60cm x4 nn【系統板材18mm厚】n頂板 500mmx500mm x1 nn大抽屜n上板 383mmx150mm x1 n下板 419mmx150mm x1 n側板 482mmx150mm x2 nn小抽屜n上板 383mmx105mm x2 n下板 419mmx105mm x2 n側板 482mmx105mm x4nn【系統板材8mm厚】n底板 474mmx393mm x3 nn鈕扣型連結器 x28 nm6螺絲 x56 nm6螺母 x56n58平頭螺絲10mm x6 n58扁頭螺絲8mm x6n滑軌 x6 n黑合金把手 x3 ", "成品1正.png", "成品1側.png", "成品1客.jpg"]
    ]
};

let products = [];
let projects = [];
let customCases = [];
let cart = [];
let currentSeries = '20';
let selectedProfile = null;


// Global Hot Sales Data
const hotProfilesData = [
    { rank: 1, name: '3030輕型', series: '30' },
    { rank: 2, name: '4040重型', series: '40' },
    { rank: 3, name: '2020型', series: '20' }
];

const hotAccessoriesData = [
    { rank: 1, name: 'M6六角螺絲', series: '30' },
    { rank: 2, name: '30靜音輪', series: '30' },
    { rank: 3, name: '三角連結塊(含M8螺絲x2,M8螺母x2)', series: '40' }
];

document.addEventListener('DOMContentLoaded', initData);

async function initData() {
    try {
        // Fetch data from Google Sheets Backend
        console.log("Fetching data from:", API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();

        // Use local Hardcoded Data to ensure fixes are applied
        // const data = rawData;

        // Fallback to local rawData if fetch returns empty/error structures (optional, but good for safety)
        // const data = remoteData || rawData; 

        if (data.products) {
            products = data.products.slice(1).map(function (row) {
                if (!row || row.length < 3) return null;
                return {
                    type: row[0],
                    series: String(row[1] || '').replace('系列', '').trim(),
                    name: row[2],
                    price: row[3],
                    img2d: row[4],
                    img3d: row[5],
                    unit: row[6],
                    status: row[7],
                    desc: row[8]
                };
            }).filter(function (p) {
                // 過濾條件：
                // 1. 商品存在且有名稱
                // 2. 不是下架商品
                // 3. 【新增】排除後台庫存行（名稱以 20-, 30-, 40- 開頭的）
                if (!p || !p.name || p.status === '下架') return false;

                // 排除後台庫存行
                if (p.name.match(/^(20|30|40)-/)) return false;

                return true;
            });
        }

        if (data.projects) {
            projects = data.projects.slice(1).map(function (row) {
                // Correct Mapping based on User's Excel:
                // [0]ID, [1]Name, [2]Desc, [3]YT, [4]PDF, [5]Scene, [6]Complete, [7]Step1, [8]Step2, [9]Step3, [10]Step4
                let cleanSteps = [];
                if (row[7]) cleanSteps.push({ img: row[7], text: '步驟1' });
                if (row[8]) cleanSteps.push({ img: row[8], text: '步驟2' });
                if (row[9]) cleanSteps.push({ img: row[9], text: '步驟3' });
                if (row[10]) cleanSteps.push({ img: row[10], text: '步驟4' });
                return {
                    id: row[0],
                    title: row[1],
                    desc: row[2],
                    yt: row[3],
                    pdf: row[4],
                    sceneImg: row[5],
                    completeImg: row[6],
                    steps: cleanSteps
                };
            });

            // SWAP LOGIC: Enforce "Clothes Hanger" (LUTU-03) before "Tea Table" (LUTU-02)
            const idx02 = projects.findIndex(p => p.id === 'LUTU-02');
            const idx03 = projects.findIndex(p => p.id === 'LUTU-03');

            if (idx02 !== -1 && idx03 !== -1 && idx02 < idx03) {
                // If Tea Table is before Clothes Hanger, swap them
                [projects[idx02], projects[idx03]] = [projects[idx03], projects[idx02]];
            }
        }

        if (data.customCases) {
            customCases = data.customCases.slice(1).map(function (row) {
                return {
                    id: row[0],
                    name: row[1],
                    desc: row[2],
                    pdf: row[3],
                    materialText: row[4],
                    img1: row[5], // F column (Front)
                    img2: row[6], // G column (Side)
                    img3: row[7]  // H column (Client)
                };
            });
        }

        // Init Data Complete
        // console.log("System Loaded " + products.length + " products.");
        switchSeries('30'); // Default to 30 Series
        // Render Project/Custom lists initially to populate them
        renderProjects();
        renderCustomCases();
        renderHotSales(); // Init Hot Sales (Sidebar)
        renderHotSalesMobile(); // Init Hot Sales (Mobile Sidebar)

    } catch (e) {
        console.error("Init Error", e);
        document.getElementById('aluminum-grid').innerHTML = '<p>資料載入錯誤</p>';
    }
}

// Mobile Hot Sales Modal Toggle
window.toggleHotSalesSidebar = function () {
    let sidebar = document.getElementById('hot-sales-sidebar');
    if (sidebar) sidebar.classList.toggle('open');
}

function renderHotSalesMobile() {
    let container = document.getElementById('hot-sales-mobile-body');
    if (!container) return;

    // Data (Using Global)
    let hotProfiles = hotProfilesData;
    let hotAccessories = hotAccessoriesData;

    let html = '';

    // Helper for Grid Cards
    const createGridCard = (item) => {
        let rankClass = `rank-${item.rank}`;

        // Find product image
        let product = products.find(p => p.name === item.name);
        let imgSrc = 'https://placehold.co/100x100?text=No+Img';
        if (product && product.img2d) {
            imgSrc = 'assets/' + product.img2d;
        }

        return `
        <div class="mobile-hot-card-v2" onclick="goToProduct('${item.name}', '${item.series}'); toggleHotSalesSidebar();">
            <div class="mobile-hot-rank-badge ${rankClass}">${item.rank}</div>
            <img src="${imgSrc}" class="mobile-hot-img" onerror="this.src='https://placehold.co/100x100?text=Img+Error'">
            <div class="mobile-hot-name-v2">${item.name}</div>
            <div class="mobile-hot-series-v2">${item.series} 系列</div>
        </div>
        `;
    };

    // 1. Profiles Grid
    html += '<div style="font-weight:bold; color:#666; margin-bottom:10px;">🔥 鋁材規格 Top 3</div>';
    html += '<div class="mobile-hot-grid">';
    hotProfiles.forEach(item => {
        html += createGridCard(item);
    });
    html += '</div>';

    // 2. Accessories Grid
    html += '<div style="font-weight:bold; color:#666; margin:10px 0 10px;">🔧 精選配件 Top 3</div>';
    html += '<div class="mobile-hot-grid">';
    hotAccessories.forEach(item => {
        html += createGridCard(item);
    });
    html += '</div>';

    container.innerHTML = html;
}

function renderHotSales() {
    let container = document.getElementById('hot-sales-container');
    if (!container) return;

    // Mock Data (Using Global)
    let hotProfiles = hotProfilesData;
    let hotAccessories = hotAccessoriesData;

    let html = '<div class="hot-sales-title"><i class="fas fa-crown"></i> 熱銷排行</div>';

    // Helper to create Sidebar Card
    const createSidebarCard = (item) => {
        let rankClass = `rank-${item.rank}`;
        // Find product image
        let product = products.find(p => p.name === item.name);
        let imgSrc = 'https://placehold.co/100x100?text=No+Img';
        if (product && product.img2d) {
            imgSrc = 'assets/' + product.img2d;
        }

        return `
        <div class="desktop-hot-card" onclick="goToProduct('${item.name}', '${item.series}')">
            <div class="mobile-hot-rank-badge ${rankClass}" style="width:20px; height:20px; font-size:0.7rem;">${item.rank}</div>
            <img src="${imgSrc}" class="desktop-hot-img">
            <div class="desktop-hot-info">
                <div class="desktop-hot-name">${item.name}</div>
            </div>
        </div>`;
    };

    // 1. Profiles
    html += '<div style="font-size:0.8rem; color:#bbb; margin:8px 0 4px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:2px;">🔥 鋁材規格 (Top 3)</div>';
    html += '<div class="desktop-hot-list">';
    hotProfiles.forEach(item => {
        html += createSidebarCard(item);
    });
    html += '</div>';

    // 2. Accessories
    html += '<div style="font-size:0.8rem; color:#bbb; margin:12px 0 4px; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:2px;">🔧 精選配件 (Top 3)</div>';
    html += '<div class="desktop-hot-list">';
    hotAccessories.forEach(item => {
        html += createSidebarCard(item);
    });
    html += '</div>';

    container.innerHTML = html;
}

window.goToProduct = function (name, series) {
    // 1. Switch to Series
    switchSeries(series);
    // 2. Select the product (Scroll to it?)
    setTimeout(() => {
        let targetEl = null;

        // Try to find as profile first
        let p = products.find(prod => prod.name === name);
        if (p) {
            if (p.type === '鋁材') {
                selectProfile(name);
                targetEl = document.getElementById('card-' + name);
            } else {
                targetEl = document.getElementById('acc-card-' + name);
            }
        }

        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            targetEl.classList.add('highlight-effect');
            // Remove after 3 seconds
            setTimeout(() => {
                targetEl.classList.remove('highlight-effect');
            }, 3000);
        }
    }, 100);
};

function renderCustomCases() {
    let container = document.getElementById('custom-cases-container');
    if (!customCases || customCases.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px; color:#999;">目前無客製成品資料，請確認後台是否已更新。</p>';
        return;
    }
    let html = '';
    customCases.forEach(function (c) {
        // Direct mapping from Cols F, G, H
        let collage1 = (c.img1 && c.img1.trim()) ? 'assets/' + c.img1.trim() : 'https://placehold.co/300x200?text=正面';
        let collage2 = (c.img2 && c.img2.trim()) ? 'assets/' + c.img2.trim() : 'https://placehold.co/300x200?text=側面';
        let collage3 = (c.img3 && c.img3.trim()) ? 'assets/' + c.img3.trim() : 'https://placehold.co/300x400?text=客戶實拍';

        let pdfUrl = (c.pdf && c.pdf !== '') ? c.pdf : '#';
        let pdfTarget = (pdfUrl !== '#') ? 'target="_blank"' : '';
        let pdfBtn = '<a href="' + pdfUrl + '" ' + pdfTarget + ' class="btn-pdf"><i class="fas fa-file-pdf"></i> 下載 PDF</a>';

        // Helper to format text (handles both \n and legacy 'n' delimiters)
        const formatText = (text) => {
            if (!text) return '';
            // If text has no standard newlines but looks like legacy 'n' format (starts with n)
            if (!text.match(/[\r\n]/) && text.trim().startsWith('n')) {
                return text.split('n')
                    .map(line => line.replace(/^[ \u3000\t]+|[ \u3000\t]+$/g, ''))
                    .join('<br>');
            }
            // Standard formatting
            return text.split(/\r\n|\r|\n/)
                .map(line => line.replace(/^[ \u3000\t]+|[ \u3000\t]+$/g, ''))
                .join('<br>');
        };

        let matText = (c.materialText) ? formatText(c.materialText) : '無材料表資料';
        let descText = (c.desc) ? formatText(c.desc) : '';

        html += `
        <div class="custom-case-row">
            <!-- 1. Info Column -->
            <div class="case-info">
                <div>
                    <div class="case-title">${c.name}</div>
                    <div class="case-desc">${descText}</div>
                </div>
                <div>
                ${pdfBtn}
                </div>
            </div>
            
            <!-- 2. Material Text Column (Replacing Image) -->
            <div class="case-material" style="position:relative;">
                <div class="collage-label" style="top:5px; left:5px; background:rgba(255,255,255,0.9);">材料表</div>
                <div class="material-text-content">${matText}</div>
            </div>

            <!-- 3. Collage Column -->
            <div class="case-collage">
                <div class="collage-left">
                    <div class="collage-item">
                        <div class="collage-label">正面</div>
                        <img src="${collage1}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                    <div class="collage-item">
                        <div class="collage-label">側面</div>
                        <img src="${collage2}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                </div>
                <div class="collage-right">
                    <div class="collage-item">
                        <div class="collage-label">客戶實拍</div>
                        <img src="${collage3}" class="collage-img h-full" onclick="showLightbox(this.src)">
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

window.switchView = function (view) {
    let btns = document.querySelectorAll('.nav-item');
    for (let i = 0; i < btns.length; i++) { btns[i].classList.remove('active'); }

    document.getElementById('view-product').classList.add('hidden');
    document.getElementById('view-projects').classList.add('hidden');
    document.getElementById('view-about').classList.add('hidden');
    document.getElementById('view-custom').classList.add('hidden');

    // Remove series classes by default for non-product views (so background becomes white)
    document.body.classList.remove('series-20', 'series-30', 'series-40');

    if (view === 'projects') {
        document.querySelector('.project-tab').classList.add('active');
        document.getElementById('view-projects').classList.remove('hidden');
        renderProjects();
    } else if (view === 'about') {
        document.querySelector('.about-tab').classList.add('active');
        document.getElementById('view-about').classList.remove('hidden');
    } else if (view === 'custom') {
        document.querySelector('.custom-tab').classList.add('active');
        document.getElementById('view-custom').classList.remove('hidden');
        renderCustomCases();
    } else {
        // Default: Product View (e.g. view === 'product')
        document.getElementById('view-product').classList.remove('hidden');
        // Restore series background
        if (typeof currentSeries !== 'undefined' && currentSeries) {
            document.body.classList.add('series-' + currentSeries);
            // Highlight active series tab
            document.querySelectorAll('.nav-item').forEach(btn => {
                if (btn.textContent.includes(currentSeries)) btn.classList.add('active');
            });
        }
    }
};

function renderSeries(series) {
    let list = products.filter(function (p) { return p.series === series; });
    let al = list.filter(function (p) { return p.type === '鋁材'; });
    let acc = list.filter(function (p) { return p.type === '配件'; });

    let alHtml = '';
    const weightMap = {
        '2020型': '0.458', '2040型': '0.862',
        '3030輕型': '0.693', '3030重型': '1.07', '3060輕型': '1.218', '3060重型': '1.844',
        '4040輕型': '1.298', '4040重型': '1.923', '4080輕型': '2.265', '4080重型': '3.505'
    };

    if (al.length > 0) {
        for (let i = 0; i < al.length; i++) {
            let p = al[i];

            // Weight Label
            let weight = weightMap[p.name] || '';
            let weightHtml = weight ? `<span class="img-label" style="background:#555; color:white;">${weight} kg/m</span>` : '';

            // Check Rank
            let hotItem = hotProfilesData.find(h => h.name === p.name);
            let badgeHtml = '';
            if (hotItem) {
                badgeHtml = `<div class="rank-badge-overlay rank-${hotItem.rank}">TOP ${hotItem.rank}</div>`;
            }

            alHtml += '<div class="profile-card" onclick="selectProfile(\'' + p.name + '\')" id="card-' + p.name + '" style="position:relative;">';
            alHtml += '<div class="profile-img" style="position:relative;">';
            alHtml += weightHtml; // Top-Left Weight
            alHtml += badgeHtml; // Top-Right Rank
            alHtml += '<img src="assets/' + p.img2d + '" style="width:100%;height:100%;object-fit:contain;padding:10px;" onerror="this.src=\'https://placehold.co/100?text=No+Img\'"></div>';
            alHtml += '<div><b>' + p.name + '</b></div>';
            alHtml += '<div style="color:#e74c3c; font-weight:bold; font-size:1.1rem;">NT$' + p.price + '/' + p.unit + '</div>';
            alHtml += '</div>';
        }
    } else { alHtml = '<p>無資料</p>'; }

    document.getElementById('aluminum-grid').innerHTML = alHtml;

    if (al.length > 0) {
        selectProfile(al[0].name);
    } else {
        document.getElementById('aluminum-input-area').classList.add('hidden');
        selectedProfile = null;
    }

    let accHtml = '';
    if (acc.length > 0) {
        for (let i = 0; i < acc.length; i++) {
            let p = acc[i];

            // Check Rank
            let hotItem = hotAccessoriesData.find(h => h.name === p.name);
            let badgeHtml = '';
            if (hotItem) {
                badgeHtml = `<div class="rank-badge-overlay rank-${hotItem.rank}">TOP ${hotItem.rank}</div>`;
            }

            let img3dSrc = (p.img3d && p.img3d !== '') ? 'assets/' + p.img3d : '';
            let img3dError = "this.parentElement.style.background='#eee';this.style.display='none';this.parentElement.innerHTML='<span style=\"color:#999;font-size:12px;\">3D (待補)</span>'";

            accHtml += '<div class="acc-card" id="acc-card-' + p.name + '" style="display:flex; flex-direction:column; justify-content:space-between; position:relative;">';
            accHtml += '<div class="acc-images" style="margin-bottom:5px;">';

            // 2D Image
            accHtml += '<div class="acc-img-wrapper" onclick="showLightbox(\'assets/' + p.img2d + '\')">';
            accHtml += '<span class="img-label">2D</span>';
            accHtml += badgeHtml; // Inject Badge on 2D
            accHtml += '<img src="assets/' + p.img2d + '" class="acc-img">';
            accHtml += '</div>';

            // 3D Image
            accHtml += '<div class="acc-img-wrapper" onclick="if(\'' + img3dSrc + '\') showLightbox(\'' + img3dSrc + '\')">';
            accHtml += '<span class="img-label">3D</span>';
            if (img3dSrc) {
                accHtml += '<img src="' + img3dSrc + '" class="acc-img" onerror="' + img3dError + '">';
            } else {
                accHtml += '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#ccc;font-size:0.8rem;">無 3D 圖</div>';
            }
            accHtml += '</div>';
            accHtml += '</div>'; // end acc-images

            let existing = cart.find(item => item.id === p.name + '_' + series);
            let currentQty = existing ? existing.qty : 0;

            // Define Series Colors (Pastel)
            let seriesColor = '#eee';
            let grayColor = '#e0e0e0'; // Fixed Gray for decrease
            if (series === '20') { seriesColor = '#BDE0F5'; }
            if (series === '30') { seriesColor = '#F5C2A5'; }
            if (series === '40') { seriesColor = '#B7E0A1'; }

            // New Layout: Split Bottom Row
            accHtml += '<div style="display:flex; flex:1; gap:8px; margin-top:5px;">';

            // Left Column: Name & Controls
            accHtml += '<div style="display:flex; flex-direction:column; justify-content:space-between; flex:1;">';
            accHtml += '<div style="font-weight:bold; font-size:1rem; color:#333; line-height:1.2;">' + p.name + '</div>';

            accHtml += '<div style="display:flex; align-items:center; gap:8px; margin-top:5px;">';
            accHtml += '<div style="color:#e74c3c; font-weight:bold; font-size:1.1rem;">NT$' + p.price + '</div>';
            accHtml += `<input type="number" id="acc-input-${p.name}" class="input-qty-no-arrow" value="${currentQty}" min="0" onchange="updateAccessory('${p.name}',this.value, '${series}')" style="border:1px solid #ddd; border-radius:4px; width:50px; text-align:center; height:32px; font-size:1rem; background:#fff; padding:0;">`;
            accHtml += '</div>';
            accHtml += '</div>'; // End Left Col

            // Right Column: Tall Buttons
            accHtml += '<div style="display:flex; flex-direction:column; width:40px; gap:2px;">';
            // Increase (+)
            accHtml += `<button class="btn-qty" style="background:${seriesColor}; color:#333; border-radius:4px 4px 0 0; flex:1; display:flex; align-items:center; justify-content:center; padding:0; border:none; cursor:pointer;" onclick="changeAccQty('${p.name}', 1, '${series}')"><span style="font-size:1.2rem; font-weight:bold; line-height:1;">+</span></button>`;
            // Decrease (-)
            accHtml += `<button class="btn-qty" style="background:${grayColor}; color:#333; border-radius:0 0 4px 4px; flex:1; display:flex; align-items:center; justify-content:center; padding:0; border:none; cursor:pointer;" onclick="changeAccQty('${p.name}', -1, '${series}')"><span style="font-size:1.2rem; font-weight:bold; line-height:1;">-</span></button>`;
            accHtml += '</div>'; // End Right Col (Buttons)

            accHtml += '</div>'; // End Bottom Row

            accHtml += '</div>'; // end acc-card
        }
    } else { accHtml = '<p>無資料</p>'; }

    document.getElementById('accessories-list').innerHTML = accHtml;
    renderAccessoryList();
}

window.changeAccQty = function (name, delta, series) {
    let input = document.getElementById('acc-input-' + name);
    if (!input) return;
    let current = parseInt(input.value) || 0;
    let newVal = current + delta;
    if (newVal < 0) newVal = 0;
    input.value = newVal;
    updateAccessory(name, newVal, series);
};

function renderAccessoryList() {
    // Show chosen accessories (len == 0)
    let items = cart.filter(item => item.len === 0 || !item.len);
    let html = '';

    let panel = document.getElementById('accessories-panel');

    if (items.length > 0) {
        items.forEach(item => {
            let color = '#555';
            // Use stored series if available, otherwise fallback (for safety)
            let s = item.series;
            if (!s) {
                // Fallback if series not in cart (old session?)
                let p = products.find(prod => prod.name === item.name);
                if (p) s = p.series;
            }

            // Series Colors for Text and Background
            let rowBg = '#f8f9fa';
            if (s === '20') { color = '#2980b9'; rowBg = '#eaf6fd'; }
            else if (s === '30') { color = '#d35400'; rowBg = '#fdebd0'; }
            else if (s === '40') { color = '#27ae60'; rowBg = '#eafaf1'; }

            html += `
            <div class="spec-row" style="background:${rowBg}; border-color:${color}40;">
                <div class="spec-info">
                    <span class="model-badge" style="color:${color};">${item.name}</span>
                    <span style="color:#aaa;"></span>
                    <span style="color:#e74c3c; font-weight:bold;">NT$${Math.round(item.price * item.qty)}</span>
                </div>
                <div class="spec-actions">
                    <span style="margin-right:10px;">數量：${item.qty}</span>
                    <button class="btn-mini-del" onclick="updateAccessory('${item.name}', 0, '${item.series}')" title="刪除">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>
            </div>`;
        });

        let subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        html += `
        <div class="spec-row" style="border-top:2px dashed #eee; margin-top:10px; padding-top:10px; justify-content:flex-end;">
            <div style="font-size:1.1rem; font-weight:bold; color:#e74c3c;">
                配件小計：NT$${Math.round(subtotal)}
            </div>
        </div>`;
    } else {
        html = '<div style="text-align:center; color:#ccc; padding:20px;">尚無選購配件</div>';
    }

    if (panel) panel.classList.remove('hidden');
    document.getElementById('selected-accessories-list').innerHTML = html;
}

window.selectProfile = function (name) {
    let cards = document.querySelectorAll('.profile-card');
    for (let i = 0; i < cards.length; i++) { cards[i].classList.remove('selected'); }

    let target = document.getElementById('card-' + name);
    if (target) target.classList.add('selected');

    selectedProfile = products.find(function (p) { return p.name === name; });
    document.getElementById('selected-profile-name').innerText = name;
    document.getElementById('aluminum-input-area').classList.remove('hidden');

    // Apply series-specific color to the add button
    const addBtn = document.querySelector('.btn-add');
    if (addBtn && selectedProfile) {
        const series = selectedProfile.series || currentSeries;
        let btnColor = '#2980b9'; // Default 20 series blue
        let btnHoverColor = '#1f6391'; // Darker blue for hover

        if (series === '30') {
            btnColor = '#e67e22'; // 30 series orange
            btnHoverColor = '#c55a11'; // Darker orange for hover
        } else if (series === '40') {
            btnColor = '#27ae60'; // 40 series green
            btnHoverColor = '#1e8449'; // Darker green for hover
        }

        // Use setProperty with important flag to override CSS
        addBtn.style.setProperty('background', btnColor, 'important');
        addBtn.style.setProperty('background-color', btnColor, 'important');
        addBtn.style.setProperty('border-color', btnColor, 'important');

        // Store colors for hover effect
        addBtn.dataset.normalColor = btnColor;
        addBtn.dataset.hoverColor = btnHoverColor;

        // Remove old listeners and add new ones
        addBtn.onmouseenter = function () {
            this.style.setProperty('background', this.dataset.hoverColor, 'important');
            this.style.setProperty('background-color', this.dataset.hoverColor, 'important');
            this.style.setProperty('border-color', this.dataset.hoverColor, 'important');
        };
        addBtn.onmouseleave = function () {
            this.style.setProperty('background', this.dataset.normalColor, 'important');
            this.style.setProperty('background-color', this.dataset.normalColor, 'important');
            this.style.setProperty('border-color', this.dataset.normalColor, 'important');
        };
    }
    renderSpecList();
};

window.addProfileToCart = function () {
    let len = parseFloat(document.getElementById('profile-len').value);
    let qty = parseInt(document.getElementById('profile-qty').value);

    if (!len || len < 10 || !qty || qty < 1) { alert("長度需至少 10 公分，且數量需大於 0"); return; }

    // 驗證長度為 0.1 的倍數（避免浮點數精度問題）
    if (Math.round(len * 10) / 10 !== len) {
        alert("長度只能精確到 0.1 公分");
        return;
    }

    addToCart(selectedProfile, qty, len);
    renderSpecList();
    document.getElementById('profile-len').value = '';
};

function renderSpecList() {
    if (!selectedProfile) return;

    // Show ALL configured profiles (length > 0)
    let items = cart.filter(item => item.len > 0);
    let html = '';

    if (items.length > 0) {
        items.forEach(item => {
            let color = '#555';
            // Use stored series if available
            let s = item.series;
            if (!s && item.name) {
                if (item.name.startsWith('20')) s = '20';
                else if (item.name.startsWith('30')) s = '30';
                else if (item.name.startsWith('40')) s = '40';
            }

            let rowBg = '#f8f9fa';
            if (s === '20') { color = '#2980b9'; rowBg = '#eaf6fd'; }
            if (s === '30') { color = '#d35400'; rowBg = '#fdebd0'; }
            if (s === '40') { color = '#27ae60'; rowBg = '#eafaf1'; }

            html += `
            <div class="spec-row" style="background:${rowBg}; border-color:${color}40;">
                <div class="spec-info">
                    <span class="model-badge" style="color:${color};">${item.name}</span>
                    <span>長度 ${item.len.toFixed(1)} cm</span>
                    <span style="color:#aaa;"></span>
                    <span style="color:#e74c3c; font-weight:bold;">NT$${Math.round(item.price * item.len * item.qty)}</span>
                </div>
                <div class="spec-actions">
                    <div class="spec-edit">
                        數量：<input type="number" value="${item.qty}" min="1" onchange="updateSpecQty('${item.id}', this.value)">
                    </div>
                    <button class="btn-mini-del" onclick="removeSpecItem('${item.id}')" title="刪除">
                        <i class="fas fa-times-circle"></i>
                    </button>
                </div>
            </div>`;
        });

        let subtotal = items.reduce((sum, item) => sum + (item.price * item.len * item.qty), 0);
        html += `
        <div class="spec-row" style="border-top:2px dashed #eee; margin-top:10px; padding-top:10px; justify-content:flex-end;">
            <div style="font-size:1.1rem; font-weight:bold; color:#e74c3c;">
                鋁材小計：NT$${Math.round(subtotal)}
            </div>
        </div>`;
    }
    document.getElementById('current-specs-list').innerHTML = html;
}

window.updateSpecQty = function (id, newQty) {
    if (newQty < 1) { alert("數量至少為 1"); renderSpecList(); return; }
    let item = cart.find(i => i.id === id);
    if (item) {
        item.qty = parseInt(newQty);
        renderCart();
        renderSpecList();
    }
};

window.removeSpecItem = function (id) {
    cart = cart.filter(i => i.id !== id);
    renderCart();
    renderSpecList();
};

window.updateAccessory = function (name, qty, series) {
    // Find the product based on name AND series to ensure correct item is selected
    let p = products.find(function (item) { return item.name === name && item.series === series; });
    if (!p) {
        // Fallback if series is not provided or product not found with series (e.g., old data)
        p = products.find(function (item) { return item.name === name; });
    }

    if (!p) {
        console.error("Product not found for accessory update:", name, series);
        return;
    }

    if (parseInt(qty) > 0) {
        addToCart(p, parseInt(qty), 0, true);
    } else {
        // Construct the ID using the new accessory ID generation logic
        let idToRemove = p.name + '_' + p.series;
        cart = cart.filter(function (i) { return i.id !== idToRemove; });
        renderCart();
    }
    renderAccessoryList();
};

function addToCart(p, qty, len, isUpdate) {
    if (!len) len = 0;
    if (!isUpdate) isUpdate = false;

    // New ID Generation to handling Series collision for accessories (len==0)
    let id;
    if (len > 0) {
        id = p.name + '-' + len + 'cm';
    } else {
        // Accessories: Append series to ensure uniqueness
        id = p.name + '_' + p.series;
    }

    if (qty <= 0 && isUpdate) {
        cart = cart.filter(function (i) { return i.id !== id; });
    } else {
        let exist = cart.find(function (i) { return i.id === id; });
        if (exist) {
            isUpdate ? exist.qty = qty : exist.qty += qty;
            // Update Series if missing (fix old items)
            if (!exist.series) exist.series = p.series;
        } else {
            cart.push({ id: id, name: p.name, series: p.series, len: len, qty: qty, price: p.price, unit: p.unit, type: p.type, img: p.img2d });
        }
    }
    renderCart();
}

function renderCart() {
    let total = 0;
    let html = '';

    if (cart.length === 0) {
        html = '<div style="text-align:center;color:#999;padding:40px 0;">購物車空空的<br>快去選購吧！</div>';
    } else {
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];
            let sub = (item.type === '鋁材' && item.unit === 'cm') ? item.price * item.len * item.qty : item.price * item.qty;
            total += sub;
            let specText = (item.len > 0) ? `長度 ${item.len.toFixed(1)}cm` : '標準規格';

            html += `
            <div class="cart-item">
                <img src="assets/${item.img}" class="cart-item-img" onerror="this.src='https://placehold.co/60?text=No+Img'">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-spec">${specText}</div>
                    <div class="cart-item-price">NT$${Math.round(sub)}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-qty-badge">x ${item.qty}</div>
                    <button class="btn-remove" onclick="removeFromCart('${item.id}')" title="移除"><i class="fas fa-trash-alt"></i> ×</button>
                </div>
            </div>`;
        }
    }
    document.getElementById('cart-items').innerHTML = html;
    document.getElementById('cart-total').innerText = Math.round(total);
    calculateTotalWithDelivery(); // Initial check
    document.getElementById('cart-count').innerText = cart.length;
}

// Add Delivery Fee Listener and Address Field Toggle
document.querySelector('select[name="delivery"]').addEventListener('change', function () {
    calculateTotalWithDelivery();
    toggleAddressField();
});

// Toggle address field based on delivery method
function toggleAddressField() {
    const deliveryMethod = document.querySelector('select[name="delivery"]').value;
    const addressInput = document.getElementById('address-input');

    if (deliveryMethod === '自取' || deliveryMethod === '店到店') {
        // Hide address field for self-pickup and store-to-store
        addressInput.style.display = 'none';
        addressInput.removeAttribute('required');
        addressInput.value = ''; // Clear value
    } else {
        // Show address field for delivery
        addressInput.style.display = 'block';
        addressInput.setAttribute('required', 'required');
    }
}

function calculateTotalWithDelivery() {
    let baseTotal = 0;
    cart.forEach(item => {
        baseTotal += (item.type === '鋁材' && item.unit === 'cm') ? item.price * item.len * item.qty : item.price * item.qty;
    });

    let deliveryMethod = document.querySelector('select[name="delivery"]').value;
    let deliveryFee = 0;

    // Check for large items (Standard Profile > 150cm? Or just hardcode logic?)
    // User logic: Quote separately for delivery.

    // For '宅配', we display base price + "To be quoted"
    let finalTotal = Math.round(baseTotal);

    // Update Display
    let totalEl = document.getElementById('cart-total');
    let isStoreToStore = deliveryMethod.includes('店到店');
    let needsQuoting = deliveryMethod.includes('宅配') || deliveryMethod.includes('公司配送');

    if (isStoreToStore) {
        finalTotal += 60;
        totalEl.innerHTML = `${finalTotal} <span style="font-size:0.6em; color:rgba(255,255,255,0.8); font-weight:normal;">(含 60 元店到店運費)</span>`;
        totalEl.setAttribute('data-note', '(含 60 元店到店運費)');
    } else if (needsQuoting) {
        // Red color for notice
        totalEl.innerHTML = `${finalTotal} <span style="font-size:0.6em; color:#e74c3c; font-weight:normal;">+ 運費待報價</span>`;
        totalEl.setAttribute('data-note', '(運費待報價)');
    } else {
        totalEl.innerText = finalTotal;
        totalEl.removeAttribute('data-note');
    }
    totalEl.setAttribute('data-raw-total', finalTotal);
}

window.removeFromCart = function (id) {
    cart = cart.filter(function (i) { return i.id !== id; });
    renderCart();
    renderSpecList();
};

window.toggleCart = function () { document.getElementById('cart-sidebar').classList.toggle('open'); };
window.showLightbox = function (src) { document.getElementById('lightbox-img').src = src; document.getElementById('lightbox').classList.add('active'); };
window.closeLightbox = function () { document.getElementById('lightbox').classList.remove('active'); };

document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (cart.length === 0) { alert("購物車是空的"); return; }

    let btn = document.getElementById('btn-submit');
    btn.disabled = true; btn.innerText = "傳送中...";

    // 觸發載入動畫
    triggerLoadingAnimation();

    let formData = new FormData(e.target);
    let totalEl = document.getElementById('cart-total');
    let rawTotal = totalEl.getAttribute('data-raw-total') || totalEl.innerText.split(' ')[0];
    let deliveryNote = totalEl.getAttribute('data-note') || "";

    let customerData = Object.fromEntries(formData.entries());
    if (deliveryNote) {
        customerData.note = (customerData.note ? customerData.note + " " : "") + deliveryNote;
    }

    let deliveryMethod = formData.get('delivery');
    let shipFee = 0;
    if (deliveryMethod && deliveryMethod.includes('店到店')) {
        shipFee = 60;
    }

    let payload = {
        customer: customerData,
        items: cart,
        totalEst: rawTotal,
        shippingFee: shipFee // [Fixed] Calculate directly from form data
    };

    fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for GAS
        headers: {
            'Content-Type': 'text/plain' // Avoid preflight
        },
        body: JSON.stringify(payload)
    })
        .then(function () {
            // With no-cors, we get an opaque response, we can't read JSON.
            // But if it didn't throw network error, it's sent.

            // 等待動畫完成後才顯示成功訊息
            setTimeout(function () {
                hideLoadingAnimation();
                alert("訂單已送出！(請確認 Line 或 Email 是否收到通知)");
                cart = [];
                renderCart();
                renderSpecList();
                toggleCart();
                e.target.reset();
            }, 6000); // 動畫總時長6秒
        })
        .catch(function (err) {
            console.error(err);
            hideLoadingAnimation();
            alert("發送失敗，請稍後再試或使用截圖傳送。");
        })
        .finally(function () {
            btn.disabled = false;
            btn.innerText = "送出訂單";
        });
});

// 載入動畫觸發函數
function triggerLoadingAnimation() {
    const overlay = document.getElementById('loadingOverlay');
    const progressText = document.getElementById('progressText');

    // 顯示覆蓋層
    overlay.classList.add('active');

    // 重置所有步驟
    document.querySelectorAll('.process-step, .process-line').forEach(el => {
        el.classList.remove('active');
    });

    // 步驟1：收單中
    setTimeout(() => {
        document.getElementById('pStep1').classList.add('active');
        progressText.textContent = '正在接收訂單資料...';
    }, 500);

    // 連接線動畫 (1.0s 開始，耗時 2s)
    setTimeout(() => {
        document.getElementById('pLine').classList.add('active');
    }, 1000);

    // 步驟2：已派單 (3.0s 出現，此時線剛好跑完)
    setTimeout(() => {
        document.getElementById('pStep2').classList.add('active');
        progressText.textContent = '訂單已成功派單！';
    }, 3000);

    // 完成動畫
    setTimeout(() => {
        progressText.textContent = '✅ 訂單提交成功！';
    }, 5000);
}

// 隱藏載入動畫
function hideLoadingAnimation() {
    const overlay = document.getElementById('loadingOverlay');
    overlay.classList.remove('active');
}

function renderProjects() {
    let container = document.getElementById('projects-container');
    if (!projects || projects.length === 0) { container.innerHTML = '<p>無專案資料</p>'; return; }
    let html = '';
    projects.forEach(function (p) {
        // Buttons Only PDF
        let pdfUrl = (p.pdf && p.pdf !== '') ? p.pdf : '#';
        let pdfTarget = (pdfUrl !== '#') ? 'target="_blank"' : '';
        let pdfBtn = '<a href="' + pdfUrl + '" ' + pdfTarget + ' class="btn-pdf"><i class="fas fa-file-pdf"></i> 下載 PDF</a>';

        let completeImg = (p.completeImg) ? 'assets/' + p.completeImg : 'https://placehold.co/300x200?text=Complete';

        // Prepare Steps Images
        let s1 = p.steps[0] ? (p.steps[0].img ? 'assets/' + p.steps[0].img : 'https://placehold.co/150x150?text=Step1') : '';
        let s2 = p.steps[1] ? (p.steps[1].img ? 'assets/' + p.steps[1].img : 'https://placehold.co/150x150?text=Step2') : '';
        let s3 = p.steps[2] ? (p.steps[2].img ? 'assets/' + p.steps[2].img : 'https://placehold.co/150x150?text=Step3') : '';
        let s4 = p.steps[3] ? (p.steps[3].img ? 'assets/' + p.steps[3].img : 'https://placehold.co/150x150?text=Step4') : '';

        // Logic to choose between YouTube (Col D) or Image (Col F) for Scene Column
        let sceneContent = '';
        let ytId = extractYoutubeId(p.yt); // Check Col D for ID
        let sceneVal = (p.sceneImg) ? p.sceneImg.trim() : '';

        if (ytId) {
            // Render YouTube Iframe
            sceneContent = `
            <div style="width:100%; height:100%; border-radius:6px; overflow:hidden; border:1px solid #eee;">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${ytId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>`;
        } else {
            // Render Image from Scene Column (Default)
            let finalImg = (sceneVal) ? 'assets/' + sceneVal : 'https://placehold.co/300x500?text=Scene';
            sceneContent = `<img src="${finalImg}" class="scene-img-vertical" style="width:100%; height:100%; object-fit:cover; border-radius:6px; border:1px solid #eee;" onclick="showLightbox(this.src)">`;
        }

        // Helper to format Description (Robust Trim)
        const formatDesc = (text) => {
            if (!text) return '';
            // Split by newline, trim each line (including full-width spaces), join back
            return text.split('\n').map(line => line.replace(/^[ \u3000\t]+|[ \u3000\t]+$/g, '')).join('\n').trim();
        };

        html += `
        <div class="project-row">
            <!-- 1. Info Title, Desc, Complete Img, PDF -->
            <div class="project-info">
                <div>
                    <div class="case-title">${p.title}</div>
                    <div class="case-desc">${formatDesc(p.desc)}</div>
                    <!-- Moved Complete Image Here -->
                    <div class="info-complete-img">
                         <div class="collage-label" style="top:5px; left:5px;">完成成品</div>
                         <img src="${completeImg}" style="width:100%; border-radius:6px; border:1px solid #eee;" onclick="showLightbox(this.src)">
                    </div>
                </div>
                <!-- Only PDF Button remains -->
                <div class="btn-group" style="margin-top:15px;">
                    ${pdfBtn}
                </div>
            </div>
            
            <!-- 2. Scene Video or Image -->
            <div class="project-scene full-height" style="position:relative;">
                <div class="collage-label" style="top:5px; left:5px;">情境示意</div>
                <div style="flex:1; display:flex; flex-direction:column; min-height: 0;">
                    ${sceneContent}
                </div>
            </div>

            <!-- 3. Steps (Collage Style: 2x2 split columns) -->
            <div class="case-collage">

                <div class="collage-left">
                    <div class="collage-item">
                        <div class="collage-label">步驟 1</div>
                        <img src="${s1}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                    <div class="collage-item">
                        <div class="collage-label">步驟 2</div>
                        <img src="${s2}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                </div>
                <div class="collage-right">
                    <div class="collage-item">
                        <div class="collage-label">步驟 3</div>
                        <img src="${s3}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                    <div class="collage-item">
                        <div class="collage-label">步驟 4</div>
                        <img src="${s4}" class="collage-img" onclick="showLightbox(this.src)">
                    </div>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function extractYoutubeId(url) {
    if (!url || url === '') return null;
    let regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    let match = url.match(regExp);
    return (match && match[2].length == 11) ? match[2] : null;
}

window.switchSeries = function (series) {
    // Force switch to product view (in case user is on About/Project pages)
    if (typeof switchView === 'function') {
        switchView('product');
    }
    currentSeries = series;
    selectedProfile = null; // Clear selection
    // Update body class for color theme
    document.body.classList.remove('series-20', 'series-30', 'series-40');
    document.body.classList.add('series-' + series);
    // Update active tab styling
    document.querySelectorAll('.nav-item').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.includes(series)) btn.classList.add('active');
    });

    // Update Title
    let titleEl = document.getElementById('page-title');
    if (titleEl) titleEl.innerText = series + ' 系列選購';

    // Update Description
    const descriptions = {
        '20': "★ 小巧精緻｜適合輕型結構、3D印表機、模型架或桌面小型設備。",
        '30': "★ 通用性強｜適合工作桌、中型展示架、自動化設備護欄，結構穩固。",
        '40': "★ 高承載力｜專為重型設備機架、大型結構樑或高負重平台設計。"
    };
    let descContainer = document.getElementById('series-desc-container');
    if (descContainer) {
        descContainer.innerText = descriptions[series] || "";
        descContainer.style.color = '#171717'; // Force dark text color
    }

    renderSeries(series);
};

// ========================================
// 頂部橫幅控制
// ========================================

// 橫幅內容陣列（自動輪播）
const bannerMessages = [
    { icon: 'fas fa-crown', text: '🏆 工業級鋁擠型專家 | 超過1000+專案實績' },
    { icon: 'fas fa-truck', text: '🚚 快速交貨 | 全台配送 | 支援自取服務' },
    { icon: 'fas fa-headset', text: '💬 專業諮詢團隊 | Line即時回覆 | 客製化服務' }
];

let currentBannerIndex = 0;
let bannerInterval;

// 初始化橫幅
function initBanner() {
    // 檢查是否已關閉過橫幅（使用 localStorage）
    if (localStorage.getItem('bannerClosed') === 'true') {
        closeBanner();
        return;
    }

    console.log('✅ 橫幅初始化成功！自動輪播已啟動（每5秒切換）');

    // 開始輪播
    bannerInterval = setInterval(rotateBanner, 5000); // 每5秒切換

    // 添加指示器點擊事件
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function () {
            currentBannerIndex = index;
            updateBannerContent();
            // 重置輪播計時器
            clearInterval(bannerInterval);
            bannerInterval = setInterval(rotateBanner, 5000);
        });
    });
}

// 輪播橫幅內容
function rotateBanner() {
    currentBannerIndex = (currentBannerIndex + 1) % bannerMessages.length;
    updateBannerContent();
}

// 更新橫幅內容
function updateBannerContent() {
    const message = bannerMessages[currentBannerIndex];
    const iconEl = document.querySelector('.banner-icon');
    const textEl = document.getElementById('bannerText');

    // 控制台顯示當前播放訊息
    console.log(`🎯 橫幅輪播 [${currentBannerIndex + 1}/3]: ${message.text}`);

    if (iconEl && textEl) {
        // 淡出效果
        textEl.style.opacity = '0';
        textEl.style.transition = 'opacity 0.2s ease';

        setTimeout(() => {
            iconEl.className = `banner-icon ${message.icon}`;
            textEl.textContent = message.text;
            textEl.style.opacity = '1';
        }, 200);
    }

    // 更新指示器
    updateIndicators();
}

// 更新指示器狀態
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentBannerIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 關閉橫幅
function closeBanner() {
    const banner = document.getElementById('topBanner');
    if (banner) {
        banner.classList.add('hidden');
        document.body.classList.add('banner-hidden');

        // 停止輪播
        if (bannerInterval) {
            clearInterval(bannerInterval);
        }

        // 記住用戶選擇（7天內不再顯示）
        localStorage.setItem('bannerClosed', 'true');
        localStorage.setItem('bannerClosedTime', Date.now());
    }
}

// 頁面載入時初始化橫幅
window.addEventListener('DOMContentLoaded', function () {
    // 檢查關閉時間，7天後重新顯示
    const closedTime = localStorage.getItem('bannerClosedTime');
    if (closedTime) {
        const daysPassed = (Date.now() - parseInt(closedTime)) / (1000 * 60 * 60 * 24);
        if (daysPassed >= 7) {
            localStorage.removeItem('bannerClosed');
            localStorage.removeItem('bannerClosedTime');
        }
    }

    initBanner();

    // Initialize series immediately
    if (typeof switchSeries === 'function') {
        switchSeries('20');
    }
});

// --- Order Lookup Logic ---
function openOrderQueryModal() {
    document.getElementById('query-modal').classList.add('active');
}

function closeQueryModal() {
    document.getElementById('query-modal').classList.remove('active');
}

function toggleOrderDetails(detailsId) {
    var detailsDiv = document.getElementById(detailsId);
    if (detailsDiv) {
        if (detailsDiv.style.display === 'none') {
            detailsDiv.style.display = 'block';
        } else {
            detailsDiv.style.display = 'none';
        }
    }
}


function submitOrderQuery() {
    var phone = document.getElementById('query-phone').value.trim();
    if (!phone) {
        alert('請輸入手機號碼');
        return;
    }

    var resultsDiv = document.getElementById('query-results');
    resultsDiv.innerHTML = '<div style="text-align:center; padding:20px;">查詢中... <i class="fas fa-spinner fa-spin"></i></div>';

    // Call GAS
    // Use the global API_URL defined at the top
    var scriptUrl = API_URL;

    fetch(scriptUrl + '?action=queryOrder&phone=' + encodeURIComponent(phone))
        .then(res => res.json())
        .then(data => {
            if (data.status === 'success') {
                if (data.orders.length === 0) {
                    resultsDiv.innerHTML = '<div style="text-align:center; padding:20px; color:#666;">查無資料，請確認手機號碼是否正確。<br>(僅顯示最近 5 筆訂單)</div>';
                } else {
                    var html = '';
                    data.orders.forEach(function (order, index) {
                        var statusColor = '#999';
                        var statusText = '處理中';
                        var rawStatus = order.status || 'unquoted';

                        // Map status to UI
                        if (rawStatus === 'unquoted') { statusText = '待報價 / 處理中'; statusColor = '#f39c12'; } // Orange
                        else if (rawStatus === 'quoted') { statusText = '已報價 (請收信)'; statusColor = '#3498db'; } // Blue
                        else if (rawStatus === 'paid') { statusText = '已付款/確認'; statusColor = '#27ae60'; } // Green
                        else if (rawStatus === 'shipping') { statusText = '待出貨'; statusColor = '#1abc9c'; } // Teal
                        else if (rawStatus === 'dispatched') { statusText = '已出貨'; statusColor = '#9b59b6'; } // Purple
                        else if (rawStatus === 'completed') { statusText = '已完成'; statusColor = '#2ecc71'; } // Green
                        else if (rawStatus === 'cancelled') { statusText = '已取消'; statusColor = '#e74c3c'; } // Red

                        var safeDate = "";
                        try {
                            safeDate = new Date(order.timestamp).toLocaleDateString();
                        } catch (e) { safeDate = "未知日期"; }

                        // Create unique ID for this order card
                        var cardId = 'order-card-' + index;
                        var detailsId = 'order-details-' + index;

                        html += `
                        <div style="border-bottom: 1px solid #eee; padding: 15px 0;">
                            <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                                <span style="font-weight:bold; color:#333;">${safeDate}</span>
                                <span style="background:${statusColor}; color:white; padding:2px 8px; border-radius:4px; font-size:0.85rem;">${statusText}</span>
                            </div>
                            <div style="color:#555; text-align:left; font-size:0.9rem; margin-bottom:5px; cursor:pointer;" onclick="toggleOrderDetails('${detailsId}')">
                                ${order.summary}
                                <span style="color:#3b82f6; font-size:0.8rem; margin-left:5px;">📋 點擊查看完整明細</span>
                            </div>
                            <div id="${detailsId}" style="display:none; background:#f9f9f9; padding:10px; border-radius:6px; margin:10px 0; font-size:0.85rem; color:#333; white-space:pre-wrap; text-align:left; max-height:300px; overflow-y:auto;">
                                ${order.details || '無詳細資料'}
                            </div>
                            <div style="display:flex; justify-content:space-between; color:#888; font-size:0.85rem;">
                                <span>配送：${order.delivery}</span>
                                <span>總額：$${order.total}</span>
                            </div>
                        </div>
                        `;
                    });
                    resultsDiv.innerHTML = html;
                }
            } else {
                resultsDiv.innerHTML = '<div style="color:red; text-align:center; padding:20px;">查詢失敗: ' + (data.message || '未知錯誤') + '</div>';
            }
        })
        .catch(err => {
            resultsDiv.innerHTML = '<div style="color:red; text-align:center; padding:20px;">連線錯誤，請稍後再試。</div>';
            console.error(err);
        });
}
