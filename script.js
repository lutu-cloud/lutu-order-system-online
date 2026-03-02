// Hardcoded Data (Restored)
const API_URL = "https://script.google.com/macros/s/AKfycbxEn0_QHCdDmA24QNrXOfFVg2lSlvdt9R7opPpLmOrxEZGxm0L7t73CWneKlaHHo8ZV/exec";
const rawData = {
    products: [
        ["產品主分類", "產品類型", "產品名稱", "單價", "圖片名稱(鋁材圖配件2D圖)", "圖片名稱(配件3D圖)", "單位", "狀態", "規格描述"],
        ["鋁材", "20系列", "2020型", 1.6, "2020型.jpg", "", "cm", "", ""],
        ["鋁材", "20系列", "2040型", 1.6, "2040型.jpg", "", "cm", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["鋁材", "30系列", "3030輕型", 1.6, "3030輕型.jpg", "", "cm", "", ""],
        ["鋁材", "30系列", "3060輕型", 1.6, "3060輕型.jpg", "", "cm", "", ""],
        ["鋁材", "30系列", "3030重型", 1.6, "3030重型.jpg", "", "cm", "", ""],
        ["鋁材", "30系列", "3060重型", 1.6, "3060重型.jpg", "", "cm", "", ""],
        ["", "", "", "", "", "", "", "", ""],
        ["鋁材", "40系列", "4040輕型", 1.6, "4040輕型.jpg", "", "cm", "", ""],
        ["鋁材", "40系列", "4080輕型", 1.6, "4080輕型.jpg", "", "cm", "", ""],
        ["鋁材", "40系列", "4040重型", 1.6, "4040重型.jpg", "", "cm", "", ""],
        ["鋁材", "40系列", "4080重型", 1.6, "4080重型.jpg", "", "cm", "", ""],
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

// --- BOM & SKU Helpers (Ported from Admin.js for B2B) ---
window.parseSKU = function (name) {
    const match = name.match(/\[([^\]]+)\]/);
    return match ? match[1] : null;
};

window.removeSKU = function (name) {
    return name.replace(/\s*\[[^\]]+\]/g, '').trim();
};

window.isScrewOrNut = function (name) {
    const n = name.toLowerCase();
    return n.includes('螺絲') || n.includes('螺母') || n.includes('螺帽') || n.includes('滑塊') || n.includes('彈片');
};

window.normalizeScrewName = function (name) {
    let n = name.trim();
    // Unity: 3M5 -> 30M5 is handled by logic?
    // Admin.js has: n = n.replace(/M(\d+)螺絲/, 'M$1六角螺絲');
    n = n.replace(/M(\d+)螺絲$/, 'M$1六角螺絲'); // Strict end match
    return n;
};

window.extractAndAddScrewNutsToMap = function (name, qty, series, totalsMap) {
    const match = name.match(/\(含([^)]+)\)/);
    if (!match) return;
    const componentStr = match[1];
    const parts = componentStr.split(/[,，]/);
    parts.forEach(part => {
        const compMatch = part.trim().match(/^(.+?)x(\d+)$/);
        if (compMatch) {
            let compName = compMatch[1].trim();
            const compQty = parseInt(compMatch[2]) * qty;
            if (compName.includes('平頭螺絲')) return;
            // compName = window.normalizeScrewName(compName); // Optional: if simple

            // Build simple key for lookup in b2bRawData
            // Note: b2bRawData has names like "20-M4六角螺絲 [Code]"
            // We need to construct "Series-CompName" to find it.

            // Heuristic for compName (e.g. M4螺絲 -> M4六角螺絲)
            if (compName.match(/^M\d+螺絲$/)) compName = compName.replace('螺絲', '六角螺絲');

            const simpleKey = `${series}-${compName}`;

            const current = totalsMap.get(simpleKey) || 0;
            totalsMap.set(simpleKey, current + compQty);
        }
    });
};

// Fuzzy finder for B2B Code Lookup
window.findB2BItem = function (generatedKey) {
    // generatedKey format: "Series-Name" (e.g. "40-合金把手組")
    // b2bRawData format: "40-合金把手 [Code]"

    // Helper to normalize strings for comparison
    const normalize = (str) => {
        if (!str) return "";
        let s = str.toString().trim().toLowerCase();
        // 1. Remove [Code]
        s = s.replace(/\s*\[.*?\]\s*$/, '');
        // 2. Remove Series Prefix (20-, 30-, 40-, or just 40)
        s = s.replace(/^(20|30|40)-?/, '');
        // 3. Keep ONLY basic name (remove brackets etc for primary match)
        s = s.replace(/\(含.*?\)/g, '');
        // 4. Remove 'Set' suffix (組)
        s = s.replace(/組$/, '');
        // 5. Aggressive: Remove EVERYTHING that is not Chinese, English, or Number.
        s = s.replace(/[^\u4e00-\u9fa5a-z0-9]/g, '');
        return s;
    };

    // Parse Series from Generated Key
    const seriesMatch = generatedKey.match(/^(20|30|40)/);
    const targetSeries = seriesMatch ? seriesMatch[1] : null;
    const targetName = normalize(generatedKey);

    return b2bRawData.find(item => {
        // 1. Check Series Match (if targetSeries exists)
        if (targetSeries && item.series !== targetSeries) return false;

        // 2. Check Name Match (Fuzzy)
        const diffName = normalize(item.name);
        return diffName === targetName;
    });
};

/* End Helpers */

let products = [];
let inventoryProducts = []; // Used as B2B Lookup Table now
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

// Hardcoded B2B Inventory Data
const b2bRawData = [
    // Aluminum 20
    { name: "2020型 [HR-0001]", type: "鋁材", series: "20", stock: 100 },
    { name: "2040型 [HR-0002]", type: "鋁材", series: "20", stock: 100 },
    // Aluminum 30
    { name: "3030輕型 [HR-0004]", type: "鋁材", series: "30", stock: 100 },
    { name: "3060輕型 [HR-0006]", type: "鋁材", series: "30", stock: 100 },
    { name: "3030重型 [HR-0003]", type: "鋁材", series: "30", stock: 100 },
    { name: "3060重型 [HR-0005]", type: "鋁材", series: "30", stock: 100 },
    // Aluminum 40
    { name: "4040輕型 [HR-0010]", type: "鋁材", series: "40", stock: 100 },
    { name: "4080輕型 [HR-0012]", type: "鋁材", series: "40", stock: 100 },
    { name: "4040重型 [HR-0009]", type: "鋁材", series: "40", stock: 100 },
    { name: "4080重型 [HR-0011]", type: "鋁材", series: "40", stock: 100 },

    // Accessories 20
    { name: "M4六角螺絲 [A20-1M4]", type: "配件", series: "20", stock: 1000 },
    { name: "M4螺母 [A20-0M4]", type: "配件", series: "20", stock: 1000 },
    { name: "三角連結塊(含M4螺絲x2,M4螺母x2) [A20-333]", type: "配件", series: "20", stock: 500 },
    { name: "平板連結片(含M4螺絲x2,M4螺母x2) [A20-LLL]", type: "配件", series: "20", stock: 500 },
    { name: "L層板架(含M4螺絲x2,M4螺母x2) [A20-L]", type: "配件", series: "20", stock: 200 },
    { name: "轉向連結塊(含M4螺絲x2,M4螺母x2) [A20-180CUBE]", type: "配件", series: "20", stock: 200 },
    { name: "絞鍊(含M4螺絲x4,M4螺母x4) [A20-HINGE]", type: "配件", series: "20", stock: 200 },
    { name: "20隱式層板架 [A20-HIDE]", type: "配件", series: "20", stock: 200 },
    { name: "20合金把手(含M4螺絲x2,M4螺母x2) [A20-HAND]", type: "配件", series: "20", stock: 200 },
    { name: "3mm六角板手 [A20-3MM]", type: "配件", series: "20", stock: 50 },

    // Accessories 30
    { name: "M6六角螺絲 [A30-1M6]", type: "配件", series: "30", stock: 1000 },
    { name: "M6螺母 [A30-0M6]", type: "配件", series: "30", stock: 1000 },
    { name: "三角連結塊(含M6螺絲x2,M6螺母x2) [A30-333]", type: "配件", series: "30", stock: 500 },
    { name: "平板連結片(含M6螺絲x2,M6螺母x2) [A30-LLL]", type: "配件", series: "30", stock: 500 },
    { name: "L層板架(含M6螺絲x2,M6螺母x2) [A30-L]", type: "配件", series: "30", stock: 200 },
    { name: "轉向連結塊(含M6螺絲x2,M6螺母x2) [A30-180CUBE]", type: "配件", series: "30", stock: 200 },
    { name: "180度連接板(含M6螺絲x4,M6螺母x4) [A30-180PAD]", type: "配件", series: "30", stock: 200 },
    { name: "30靜音輪/腳架固定器(含M6螺絲x2,M6螺母x2) [A30-FG]", type: "配件", series: "30", stock: 200 },
    { name: "絞鍊(含M6螺絲x4,M6螺母x4) [A30-HINGE]", type: "配件", series: "30", stock: 200 },
    { name: "30隱式層板架 [A30-HIDE]", type: "配件", series: "30", stock: 200 },
    { name: "180度連結器(含M6螺絲x2,M6螺母x2) [A30-180LID2]", type: "配件", series: "30", stock: 200 },
    { name: "30金屬端蓋(含M6平頭螺絲x1) [A30-LID]", type: "配件", series: "30", stock: 100 },
    { name: "30靜音輪 [A30-GEAR]", type: "配件", series: "30", stock: 100 },
    { name: "30腳架 [A30-FEET]", type: "配件", series: "30", stock: 100 },
    { name: "30合金把手(含M6螺絲x2,M6螺母x2) [A30-HAND]", type: "配件", series: "30", stock: 100 },
    { name: "5mm六角板手 [A30-5MM]", type: "配件", series: "30", stock: 50 },

    // Accessories 40
    { name: "M8六角螺絲 [A40-1M8]", type: "配件", series: "40", stock: 1000 },
    { name: "M8螺母 [A40-0M8]", type: "配件", series: "40", stock: 1000 },
    { name: "三角連結塊(含M8螺絲x2,M8螺母x2) [A40-333]", type: "配件", series: "40", stock: 500 },
    { name: "平板連結片(含M8螺絲x2,M8螺母x2) [A40-LLL]", type: "配件", series: "40", stock: 500 },
    { name: "L層板架(含M8螺絲x2,M8螺母x2) [A40-L]", type: "配件", series: "40", stock: 200 },
    { name: "轉向連結塊(含M8螺絲x2,M8螺母x2) [A40-180CUBE]", type: "配件", series: "40", stock: 200 },
    { name: "180度連接板(含M8螺絲x4,M8螺母x4) [A40-180PAD]", type: "配件", series: "40", stock: 200 },
    { name: "40靜音輪/腳架固定器(含M8螺絲x2,M8螺母x2) [A40-FG]", type: "配件", series: "40", stock: 200 },
    { name: "絞鍊(含M8螺絲x4,M8螺母x4) [A40-HINGE]", type: "配件", series: "40", stock: 200 },
    { name: "40隱式層板架 [A40-HIDE]", type: "配件", series: "40", stock: 200 },
    { name: "180度連結器(含M8螺絲x2,M8螺母x2) [A40-180LID2]", type: "配件", series: "40", stock: 200 },
    { name: "40金屬端蓋(含M8平頭螺絲x1) [A40-LID]", type: "配件", series: "40", stock: 100 },
    { name: "40靜音輪 [A40-GEAR]", type: "配件", series: "40", stock: 100 },
    { name: "40腳架 [A40-FEET]", type: "配件", series: "40", stock: 100 },
    { name: "40合金把手(含M8螺絲x2,M8螺母x2) [A40-HAND]", type: "配件", series: "40", stock: 100 },
    { name: "6mm六角板手 [A40-6MM]", type: "配件", series: "40", stock: 50 }
];

// Global Inventory Fetcher
async function fetchInventoryForB2B() {
    console.log("Loading B2B Inventory...");
    processInventoryData(b2bRawData); // Load local first

    try {
        console.log("Syncing with Backend...");
        const res = await fetch(API_URL + "?action=getInventory&t=" + new Date().getTime());
        const json = await res.json();
        let data = [];
        if (Array.isArray(json)) data = json;
        else if (json && Array.isArray(json.inventory)) data = json.inventory;
        else if (json && Array.isArray(json.data)) data = json.data;

        if (data.length > 0) {
            console.log("Backend Data Received.");
            processInventoryData(data);
        }
    } catch (e) {
        console.warn("Backend Sync Failed.", e);
    }
}

function processInventoryData(data) {
    if (!data || data.length === 0) return;
    inventoryProducts = data.map(item => {
        const getVal = (obj, keys) => { for (let k of keys) { if (obj[k] !== undefined) return obj[k]; } return undefined; };
        let name = getVal(item, ['name', '品項名稱', '品項']) || "";
        let qty = getVal(item, ['qty', 'stock', '庫存數量', '數量']) || 0;
        if (!name) return null;
        let series = "Others";
        if (name.includes('20') || name.startsWith('20-')) series = "20";
        if (name.includes('30') || name.startsWith('30-')) series = "30";
        if (name.includes('40') || name.startsWith('40-')) series = "40";
        let type = "配件";
        if (item.type === '鋁材') type = "鋁材";
        else if (name.includes('鋁擠型') || name.includes('鋁材') || name.match(/^(20|30|40)\d{2}型/) || name.includes('輕型') || name.includes('重型')) type = "鋁材";
        return { id: name, name: name, type: type, series: series, price: 0, stock: qty, img2d: '', unit: '個' };
    }).filter(p => p);

    if (userMode === 'B2B') {
        renderB2BSidebarTree();
        renderSeriesOverview('20');
    }
}

document.addEventListener('DOMContentLoaded', initData);



// Initialize Data
async function initData() {
    console.log("Initializing Data...");

    // 1. Load Local Data IMMEDIATELY (Synchronous)
    // This ensures UI has data even while waiting for API
    processData(rawData);

    // 2. Try Fetching from API (Async Update)
    try {
        console.log("Fetching up-to-date data from Google Sheet:", API_URL);
        // Show a discrete loading indicator if desired, or let it load silently
        const loadingIndicator = document.createElement('div');
        loadingIndicator.id = 'sync-indicator';
        loadingIndicator.innerHTML = '<i class="fas fa-sync fa-spin"></i> 同步最新型錄中...';
        loadingIndicator.style.cssText = 'position:fixed; bottom:10px; left:10px; background:rgba(0,0,0,0.7); color:white; padding:5px 10px; border-radius:20px; font-size:12px; z-index:9999;';
        document.body.appendChild(loadingIndicator);

        // Fetch without caching issue
        const response = await fetch(API_URL + "?action=getProducts&t=" + new Date().getTime());
        if (response.ok) {
            let remote = await response.json();

            // Check if returned data has the required structure
            if (remote && (remote.products || remote.data || Array.isArray(remote))) {
                console.log("Remote data loaded successfully. Updating UI...");

                // Note: The API might return { products: [], projects: [], customCases: [] } 
                // or just the raw array if there's only one sheet.
                // If it's returning the whole workbook object, we pass it to processData
                processData(remote);
            } else {
                console.warn("API Data format not recognized:", remote);
            }
        } else {
            console.warn("API Error, status:", response.status);
        }
    } catch (e) {
        console.error("API Fetch failed. Using local cache.", e);
    } finally {
        const indicator = document.getElementById('sync-indicator');
        if (indicator) {
            indicator.innerHTML = '<i class="fas fa-check"></i> 型錄已更新';
            setTimeout(() => indicator.remove(), 2000);
        }
    }
}

// Helper: Process Data Logic (Extracted)
function processData(data) {
    try {
        let changed = false;

        if (data.products) {
            let lastType = '';
            let lastSeries = '';

            let allItems = data.products.slice(1).map(function (row) {
                if (!row || row.length < 3) return null;

                let type = row[0];
                let seriesRaw = row[1];

                if (type) lastType = type;
                else type = lastType;

                if (seriesRaw) lastSeries = seriesRaw;
                else seriesRaw = lastSeries;

                let series = String(seriesRaw || '').replace('系列', '').trim();
                let id = row[2];
                if (id) id = String(id).replace(/['"]/g, '');

                // Fix: Protect against undefined fields when Google Sheet trims empty cells at the end
                let img2d = (row.length > 4 && row[4]) ? String(row[4]).trim() : '';
                let img3d = (row.length > 5 && row[5]) ? String(row[5]).trim() : '';
                let unit = (row.length > 6 && row[6]) ? String(row[6]).trim() : '';
                let status = (row.length > 7 && row[7]) ? String(row[7]).trim() : '';
                let desc = (row.length > 8 && row[8]) ? String(row[8]).trim() : '';

                let finalImg2d = img2d;
                if (!finalImg2d && row.length > 4) finalImg2d = String(row[4]).trim();

                let finalImg3d = img3d;
                // Smart fallback for missing 3D images with specific name corrections
                if (!finalImg3d && finalImg2d && finalImg2d.includes('2D')) {
                    let name3d = finalImg2d.replace('2D', '3D');
                    // Handle spelling and naming inconsistencies in local 3D assets
                    name3d = name3d.replace('M4六角螺絲', '螺絲');
                    name3d = name3d.replace('M6六角螺絲', '螺絲');
                    name3d = name3d.replace('M8六角螺絲', '螺絲');
                    name3d = name3d.replace('M4螺母', '螺母');
                    name3d = name3d.replace('M6螺母', '螺母');
                    name3d = name3d.replace('M8螺母', '螺母');
                    name3d = name3d.replace('平板連結片', '平板連結塊');
                    name3d = name3d.replace('絞鍊', '絞鏈');
                    name3d = name3d.replace('合金把手組', '合金把手');
                    finalImg3d = name3d;
                }

                let pObj = {
                    id: id,
                    type: type,
                    series: series,
                    name: row[2],
                    price: row[3],
                    img2d: finalImg2d,
                    img3d: finalImg3d,
                    unit: unit,
                    status: status,
                    desc: desc
                };

                // Debugging output specifically for 2020/2040 and accessories to see the parsed path
                if (pObj.name === '2020型' || pObj.name === '2040型') {
                    console.log("[DEBUG] Parsed Profile:", pObj.name, "img2d:", pObj.img2d, "Row Length:", row.length, "Row data:", row);
                }

                return pObj;
            }).filter(p => p && p.name && p.status !== '下架');

            // Only update and trigger render if data is actually different
            if (JSON.stringify(products) !== JSON.stringify(allItems)) {
                products = allItems;
                inventoryProducts = b2bRawData;
                changed = true;
                console.log(`Loaded ${products.length} standard products.`);
            }
        }

        if (data.projects) {
            let newProjects = data.projects.slice(1).map(row => ({
                id: row[0],
                title: row[1],
                desc: row[2],
                yt: row[3],
                pdf: row[4],
                sceneImg: row[5],
                completeImg: row[6],
                steps: [
                    (row.length > 7 && row[7]) ? { img: row[7], text: '步驟1' } : null,
                    (row.length > 8 && row[8]) ? { img: row[8], text: '步驟2' } : null,
                    (row.length > 9 && row[9]) ? { img: row[9], text: '步驟3' } : null,
                    (row.length > 10 && row[10]) ? { img: row[10], text: '步驟4' } : null
                ].filter(Boolean)
            }));
            const idx02 = newProjects.findIndex(p => p.id === 'LUTU-02');
            const idx03 = newProjects.findIndex(p => p.id === 'LUTU-03');
            if (idx02 !== -1 && idx03 !== -1 && idx02 < idx03) {
                [newProjects[idx02], newProjects[idx03]] = [newProjects[idx03], newProjects[idx02]];
            }

            if (JSON.stringify(projects) !== JSON.stringify(newProjects)) {
                projects = newProjects;
                changed = true;
            }
        }

        if (data.customCases) {
            let newCustomCases = data.customCases.slice(1).map(function (row) {
                return {
                    id: row[0],
                    name: row[1],
                    desc: row[2],
                    pdf: (row.length > 3 && row[3]) ? row[3] : '',
                    materialText: (row.length > 4 && row[4]) ? row[4] : '',
                    img1: (row.length > 5 && row[5]) ? row[5] : '',
                    img2: (row.length > 6 && row[6]) ? row[6] : '',
                    img3: (row.length > 7 && row[7]) ? row[7] : ''
                };
            });

            if (JSON.stringify(customCases) !== JSON.stringify(newCustomCases)) {
                customCases = newCustomCases;
                changed = true;
            }
        }

        // Re-Render UI after data update ONLY if something actually changed
        if (changed || typeof window._firstLoadDone === 'undefined') {
            window._firstLoadDone = true;
            refreshUI();
        }

    } catch (e) {
        console.error("Data Processing Error", e);
    }
}

function refreshUI() {
    // Re-render based on current state
    if (userMode === 'B2B') {
        renderB2BDashboard(); // Refresh Dashboard Stats
        renderSeriesOverview(currentB2BSeries); // Refresh List
    } else {
        // Essential for B2C mode to not appear blank on initial API response
        // Only re-render if we are currently looking at the product view
        if (!document.getElementById('view-product').classList.contains('hidden')) {
            if (typeof currentSeries !== 'undefined' && currentSeries) {
                renderSeries(currentSeries);
            } else {
                renderSeries('20'); // fallback
            }
        }
    }

    // Always refresh these
    renderProjects();
    renderCustomCases();
    renderHotSales();
    renderHotSalesMobile();
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
    html += '<div style="font-size:0.8rem; color:#7f8c8d; margin:8px 0 4px; border-bottom:1px solid #e2e8f0; padding-bottom:2px;">🔥 鋁材規格 (Top 3)</div>';
    html += '<div class="desktop-hot-list">';
    hotProfiles.forEach(item => {
        html += createSidebarCard(item);
    });
    html += '</div>';

    // 2. Accessories
    html += '<div style="font-size:0.8rem; color:#7f8c8d; margin:12px 0 4px; border-bottom:1px solid #e2e8f0; padding-bottom:2px;">🔧 精選配件 (Top 3)</div>';
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

            let delay = (i % 8) * 0.05;
            alHtml += '<div class="profile-card" onclick="selectProfile(\'' + p.name + '\')" id="card-' + p.name + '" style="position:relative; animation-delay:' + delay + 's;">';
            alHtml += '<div class="profile-img" style="position:relative;">';
            alHtml += weightHtml; // Top-Left Weight
            alHtml += badgeHtml; // Top-Right Rank
            alHtml += '<img src="assets/' + p.img2d + '" style="width:100%;height:100%;object-fit:contain;padding:10px;" onerror="this.src=\'https://placehold.co/100?text=No+Img\'"></div>';
            alHtml += '<div>' + p.name + '</div>';
            alHtml += '<div style="color:#e74c3c; font-weight:300; font-size:1.1rem;">NT$' + p.price + '/' + p.unit + '</div>';
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

            let delay = (i % 8) * 0.05;
            accHtml += '<div class="acc-card" id="acc-card-' + p.name + '" style="display:flex; flex-direction:column; justify-content:space-between; position:relative; animation-delay:' + delay + 's;">';
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
            accHtml += '<div style="font-weight:300; font-size:1rem; color:#333; line-height:1.2;">' + p.name + '</div>';

            accHtml += '<div style="display:flex; align-items:center; gap:8px; margin-top:5px;">';
            accHtml += '<div style="color:#e74c3c; font-weight:300; font-size:1.1rem;">NT$' + p.price + '</div>';
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
                    <span style="color:#e74c3c; font-weight:300;">NT$${Math.round(item.price * item.qty)}</span>
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
            <div style="font-size:1.1rem; font-weight:300; color:#e74c3c;">
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

    if (!len || len < 10 || len > 600 || !qty || qty < 1) {
        alert("長度需介於 10 與 600 公分之間，且數量需大於 0");
        return;
    }

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
                    <span style="color:#e74c3c; font-weight:300;">NT$${Math.round(item.price * item.len * item.qty)}</span>
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
            <div style="font-size:1.1rem; font-weight:300; color:#e74c3c;">
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

    // Unified Unique ID Generation (Ensures items from different series don't merge)
    let id;
    if (len > 0) {
        id = p.name + '-' + len + 'cm_' + p.series; // Added series suffix for aluminum too just in case
    } else {
        id = p.name + '_' + p.series;
    }

    if (qty <= 0 && isUpdate) {
        cart = cart.filter(function (i) { return i.id !== id; });
    } else {
        let exist = cart.find(function (i) { return i.id === id; });
        if (exist) {
            isUpdate ? exist.qty = qty : exist.qty += qty;
            if (!exist.series) exist.series = p.series;
        } else {
            cart.push({
                id: id,
                name: p.name,
                series: p.series,
                len: len,
                qty: qty,
                price: p.price,
                unit: p.unit,
                type: p.type,
                img: p.img2d
            });
        }
    }
    // Check if we are in B2B mode to decide which render function to call
    if (document.body.classList.contains('mode-b2b')) {
        if (typeof renderAnalysisAndManifest === 'function') renderAnalysisAndManifest();
    } else {
        renderCart();
    }
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
    let hasAluminum = false;
    cart.forEach(item => {
        baseTotal += (item.type === '鋁材' && item.unit === 'cm') ? item.price * item.len * item.qty : item.price * item.qty;
        if (item.type === '鋁材') hasAluminum = true;
    });

    const deliverySelect = document.querySelector('select[name="delivery"]');
    const storeOption = Array.from(deliverySelect.options).find(opt => opt.value.includes('店到店'));

    if (hasAluminum) {
        if (storeOption) {
            storeOption.disabled = true;
            storeOption.text = '店到店 (含鋁材不可選)';
            // If currently selected, switch to default or pickup
            if (deliverySelect.value.includes('店到店')) {
                deliverySelect.value = '宅配(運費待報價)';
                toggleAddressField();
            }
        }
    } else {
        if (storeOption) {
            storeOption.disabled = false;
            storeOption.text = '店到店(純配件)';
        }
    }

    let deliveryMethod = deliverySelect.value;
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
        // [Fix] Remove frontend addition of 60 to prevent double counting with backend auto-logic
        totalEl.innerHTML = `${finalTotal} <span style="font-size:0.6em; color:rgba(255,255,255,0.8); font-weight:normal;">(店到店運費由系統自動計算)</span>`;
        totalEl.setAttribute('data-note', '(含店到店運費)');
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

    let deliveryMethod = formData.get('delivery');
    let shipFee = 0;
    // [Fix] Removed frontend shipFee = 60 assignment to prevent double counting
    if (deliveryMethod && deliveryMethod.includes('店到店')) {
        // We let the backend or the base price handle it to avoid 60+60
    }

    // [Fix] Re-add delivery method prefix to address for robust detection in admin panel
    let addrPrefix = "";
    if (deliveryMethod.includes('店到店')) addrPrefix = "[店到店] ";
    if (deliveryMethod.includes('自取')) addrPrefix = "[自取] ";
    if (deliveryMethod.includes('公司配送')) addrPrefix = "[公司配送] ";

    customerData.address = addrPrefix + (customerData.address || "").trim();

    // Inject exact official name (with brackets and SKU) before sending to backend
    let enrichedCart = cart.map(item => {
        let exactName = item.name;
        if (typeof b2bRawData !== 'undefined' && b2bRawData.length > 0) {
            let match = b2bRawData.find(raw => {
                let rBase = String(raw.name || "").split('[')[0].split('(')[0].trim();
                let iBase = String(item.name || "").split('[')[0].split('(')[0].trim();
                if (!rBase || !iBase) return false;

                let rStripped = rBase.replace(/^(20|30|40)(?![0-9])/, '');
                let iStripped = iBase.replace(/^(20|30|40)(?![0-9])/, '');

                let isNameMatch = rBase === iBase || rStripped === iStripped || rStripped === iBase || iStripped === rBase;
                let isSeriesMatch = !item.series || !raw.series || String(raw.series) === String(item.series);
                return isNameMatch && isSeriesMatch && (!item.type || !raw.type || item.type === raw.type);
            });

            if (!match) {
                match = b2bRawData.find(raw => {
                    let rBase = String(raw.name || "").split('[')[0].split('(')[0].trim();
                    let iBase = String(item.name || "").split('[')[0].split('(')[0].trim();
                    if (!rBase || !iBase) return false;

                    if (rBase.length > 2 && iBase.length > 2) {
                        let isNameMatch = rBase.includes(iBase) || iBase.includes(rBase);
                        let isSeriesMatch = !item.series || !raw.series || String(raw.series) === String(item.series);
                        if (isNameMatch && isSeriesMatch && (!item.type || !raw.type || item.type === raw.type)) return true;
                    }
                    return false;
                });
            }
            if (match && match.name) exactName = match.name;
        }
        return Object.assign({}, item, { name: exactName });
    });

    let payload = {
        customer: customerData,
        items: enrichedCart,
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
            sceneContent = `<img src="${finalImg}" class="scene-img-vertical" style="width:100%; height:100%; object-fit:contain; border-radius:6px; border:1px solid #eee;" onclick="showLightbox(this.src)">`;
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
                                <span>總額：$${Math.round(order.total)}</span>
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

// =========================================================
// Hub & B2B Analysis Logic
// =========================================================

let userMode = 'B2C';
let b2bActiveFilter = 'all';

// --- B2B Dashboard Logic ---

// Replace userMode select (Refactored for Tabs)
window.selectUserMode = function (mode) {
    userMode = mode;
    console.log("User Mode selected:", userMode);

    const hub = document.getElementById('hub-overlay');
    if (hub) hub.classList.add('hidden');

    if (mode === 'B2B') {
        document.body.classList.add('mode-b2b');
        document.getElementById('b2b-dashboard').classList.remove('hidden');

        // No more sidebar tree init

        // Default to loading '20' Series
        switchB2BSeries('20');

        // Show Dashboard Cockpit initially
        setTimeout(renderB2BDashboard, 100);

        renderAnalysisAndManifest();
    } else {
        document.body.classList.remove('mode-b2b');
        document.getElementById('b2b-dashboard').classList.add('hidden');
        switchSeries('20');
    }
};

window.returnToHub = function () {
    const hub = document.getElementById('hub-overlay');
    if (hub) hub.classList.remove('hidden');

    // Hide B2B Dashboard regardless
    document.getElementById('b2b-dashboard').classList.add('hidden');
    document.body.classList.remove('mode-b2b');

    // Reset Title or View if needed (Optional)
    // switchView('product'); 
};

// Track current B2B series for navigation
let currentB2BSeries = '20';

// New Tab Switcher Function
window.switchB2BSeries = function (series) {
    currentB2BSeries = series; // Track current series

    // 1. Update Tabs Visual
    document.querySelectorAll('.b2b-tab-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-series') === series) {
            btn.classList.add('active');
        }
    });

    // 2. Render Content
    renderSeriesOverview(series);
};

// Return to Series Overview
window.returnToSeriesOverview = function () {
    // If search is active, clear it or re-search? 
    // UX: If user was searching, maybe keep search results?
    // For now, let's reset to series view
    let searchInput = document.getElementById('b2b-search-input');
    if (searchInput && searchInput.value.trim() !== "") {
        handleB2BSearch(searchInput.value);
    } else {
        renderSeriesOverview(currentB2BSeries);
    }
};

// ============================================
// GLOBAL SEARCH LOGIC (New)
// ============================================

window.handleB2BSearch = function (keyword) {
    keyword = keyword.trim().toLowerCase();

    // UI Helpers
    const mainEl = document.querySelector('.b2b-product-panel');
    const tabs = document.querySelectorAll('.b2b-tab-btn');

    // 1. If empty, revert to current series tab logic
    if (keyword === "") {
        // Restore active tab state visually
        tabs.forEach(btn => {
            if (btn.getAttribute('data-series') === currentB2BSeries) btn.classList.add('active');
            else btn.classList.remove('active');
        });
        renderSeriesOverview(currentB2BSeries);
        return;
    }

    // 2. Clear Tab Active States (Visual cue that we are in Global Search mode)
    tabs.forEach(btn => btn.classList.remove('active'));

    // 3. Filter ALL products (ignoring series)
    // We enhance search to include "Hidden" B2B SKUs
    let matches = products.filter(p => {
        let cleanName = p.name.replace(/\(含.*?\)/, '').replace(/組$/, '').trim();
        let b2bMatch = findB2BItem(p.name) || findB2BItem(`${p.series}-${cleanName}`);
        let hiddenSKU = b2bMatch ? parseSKU(b2bMatch.name) : "";

        let text = (p.name + " " + (p.id || "") + " " + (hiddenSKU || "")).toLowerCase();
        return text.includes(keyword);
    });

    // 4. Render Results
    if (matches.length === 0) {
        mainEl.innerHTML = `
            <div style="padding:40px; text-align:center; color:#999;">
                <div style="font-size:3rem; margin-bottom:10px; opacity:0.3;"><i class="fas fa-search"></i></div>
                <div>找不到與 "<b>${keyword}</b>" 相關的商品</div>
                <div style="font-size:0.85rem; margin-top:5px;">請嘗試輸入不同關鍵字，或搜尋型號。</div>
            </div>
        `;
        return;
    }

    // Reuse rendering logic but with explicit series badges
    let html = `
        <div style="padding: 15px 15px 0 15px; flex-shrink:0;">
            <h2 style="margin-bottom:12px; color:#2c3e50; font-size:1.2rem; font-weight:300; letter-spacing:1px;">
                <i class="fas fa-search"></i> 搜尋結果 <span style="font-weight:normal; font-size:0.9rem; color:#666;">(${matches.length} 筆)</span>
            </h2>
             <div class="b2b-table-header" style="font-size:0.85rem; padding:8px 0; border-bottom:2px solid #eee; margin-bottom:5px;">
                <div class="col-img" style="flex:0 0 65px;">圖</div>
                <div class="col-name" style="padding-left:8px;">品名 / 規格</div>
                <div class="col-price" style="text-align:right; padding-right:8px;">單價</div>
                <div class="col-action" style="flex:0 0 20px;"></div>
            </div>
        </div>
        <div id="b2b-search-list" class="b2b-product-list" style="flex:1; overflow-y:auto; padding:0 15px 15px 15px; min-height:0;">
    `;

    matches.forEach(p => {
        let imgUrl = (p.img2d) ? `assets/${p.img2d}` : 'https://placehold.co/50';

        // Define Series Color
        let sColor = '#999';
        if (p.series === '20') sColor = '#3498db';
        if (p.series === '30') sColor = '#e67e22';
        if (p.series === '40') sColor = '#2ecc71';

        // --- SMART CODE INJECTION & HYBRID NAMING (Unified) ---
        let displayName = p.name;
        let mainCodeHtml = "";
        let skuCode = "";
        let subItemsHtml = "";

        let cleanNameForMatch = p.name.replace(/\(含.*?\)/, '').replace(/組$/, '').trim();
        let match = findB2BItem(p.name);
        if (!match) match = findB2BItem(`${p.series}-${cleanNameForMatch}`);

        if (match) {
            skuCode = parseSKU(match.name);
            let b2bBaseName = removeSKU(match.name).trim();
            // Extract Set Info
            let flowInfo = "";
            let setMatch = p.name.match(/(\(含.*?\))/);
            if (setMatch) flowInfo = " " + setMatch[1];

            displayName = b2bBaseName;
            const fullB2BName = match.name;
            if (flowInfo && !fullB2BName.includes('(含')) {
                displayName += flowInfo;
            }

            if (skuCode) {
                // Colored badge for search results
                mainCodeHtml = `<span class="sku-badge" style="background:${sColor}15; color:${sColor}; border:1px solid ${sColor}40;">[${skuCode}]</span>`;
            }
        }

        // Sub-items
        if (p.name.includes('(') && p.name.includes(')')) {
            let subMap = new Map();
            extractAndAddScrewNutsToMap(p.name, 1, parseInt(p.series), subMap);
            if (subMap.size > 0) {
                subItemsHtml = `<div style="margin-top:4px; padding-left:10px; border-left:2px solid #ddd;">`;
                subMap.forEach((qty, key) => {
                    let partMatch = findB2BItem(key);
                    let subSku = partMatch ? parseSKU(partMatch.name) : '';
                    let cleanPartName = key.replace(/^\d+-/, '');
                    subItemsHtml += `<div class="b2b-sub-item-row">${cleanPartName} <span style="font-weight:300; margin-left:5px;">x${qty}</span></div>`;
                });
                subItemsHtml += `</div>`;
            }
        }

        let priceDisplay = p.price;
        let unitDisplay = p.unit || '個';
        if (p.type === '鋁材') unitDisplay = 'cm';

        // Weight Display for Left Panel
        let weightHtml = '';
        if (p.type === '鋁材') {
            let wm = weightMap[p.name];
            if (wm) {
                weightHtml = `<span style="font-size:0.75rem; color:#888; margin-left:5px; background:#f0f0f0; padding:1px 4px; border-radius:3px;">${wm} kg/m</span>`;
            }
        }

        // Accordion Content HTML (Hidden by default)
        let rowId = 'search-batch-' + Math.random().toString(36).substr(2, 5);
        let accordionHtml = '';

        if (p.type === '鋁材') {
            accordionHtml = `
                <div class="product-accordion-content" onclick="event.stopPropagation()" style="display:none; padding:15px; margin-top:10px; background:#f8f9fa; border-radius:8px; border:1px dashed #ddd;">
                     <div id="${rowId}" class="batch-input-container" onclick="event.stopPropagation()">
                         <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                              <input type="number" class="detail-input input-len" placeholder="長度(cm)" min="10" step="0.1" style="flex:1;" onclick="event.stopPropagation()">
                              <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:70px;" onclick="event.stopPropagation()">
                         </div>
                     </div>
                     
                     <div style="display:flex; gap:10px; padding-top:10px; border-top:1px solid #eee;">
                         <button onclick="event.stopPropagation(); addBatchRow('${rowId}')" class="btn-secondary" style="flex:1; padding:8px; border:1px solid #ccc; background:white; color:#555; border-radius:4px; cursor:pointer;">
                             <i class="fas fa-plus"></i> 新增規格
                         </button>
                         <button onclick="event.stopPropagation(); addToCartBatch('${p.name}', '${rowId}', this)" class="btn-primary" style="flex:2; padding:8px; background:#2c3e50; color:white; border:none; border-radius:4px; cursor:pointer;">
                             加入清單 <i class="fas fa-arrow-right"></i>
                         </button>
                     </div>
                     <div class="add-feedback" style="display:none; text-align:center; font-size:0.8rem; color:#27ae60; margin-top:5px; font-weight:bold;">
                        <i class="fas fa-check"></i> 已加入
                    </div>
                </div>`;
        } else {
            accordionHtml = `
                <div class="product-accordion-content" onclick="event.stopPropagation()" style="display:none; padding:15px; margin-top:10px; background:#f8f9fa; border-radius:8px; border:1px dashed #ddd;">
                     <div id="${rowId}" class="batch-input-container" onclick="event.stopPropagation()">
                         <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                              <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:100%;" onclick="event.stopPropagation()">
                         </div>
                     </div>
                     <div style="padding-top:10px; border-top:1px solid #eee;">
                         <button onclick="event.stopPropagation(); addToCartBatch('${p.name}', '${rowId}', this)" class="btn-primary" style="width:100%; padding:8px; background:#2c3e50; color:white; border:none; border-radius:4px; cursor:pointer;">
                             加入清單
                         </button>
                     </div>
                      <div class="add-feedback" style="display:none; text-align:center; font-size:0.8rem; color:#27ae60; margin-top:5px; font-weight:bold;">
                        <i class="fas fa-check"></i> 已加入
                    </div>
                </div>`;
        }

        html += `
        <div class="b2b-product-row b2b-series-${p.series.split('-')[0]}" 
             style="padding:0; border-bottom:1px solid #f1f2f6;">
             
             <div style="display:flex; padding:12px 10px; cursor:pointer;" onclick="toggleProductAccordion(this.parentElement)">
                <div class="col-img" style="flex:0 0 65px; position:relative;">
                    <img src="${imgUrl}" class="b2b-thumb" style="width:65px; height:65px; border-radius:4px; object-fit: cover; cursor:zoom-in;" onclick="event.stopPropagation(); showLightbox(this.src)">
                    <div style="position:absolute; bottom:0; left:0; padding:1px 4px; border-radius:0 4px 0 0; background:${sColor}; color:white; font-size:0.7rem; font-weight:400;">${p.series.split('-')[0]}</div>
                </div>
                <div class="col-name" style="padding-left:12px; min-width:0; flex:1;">
                    <div style="font-weight:300; font-size:0.95rem; color:#2c3e50; line-height:1.2; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; letter-spacing:0.5px;">${displayName}</div>
                    <div style="font-size:0.8rem; color:#666; font-weight:300;">${mainCodeHtml} ${weightHtml}</div>
                    ${subItemsHtml}
                </div>
                <div class="col-price" style="flex:0 0 90px; display:flex; flex-direction:column; justify-content:center; align-items:flex-end; font-size:0.9rem; font-weight:300; color:#444;">
                    <div><span style="color:#e74c3c;">$${priceDisplay}</span> / ${unitDisplay}</div>
                    <i class="fas fa-chevron-down accordion-arrow" style="margin-top:5px; color:#ddd; transition:transform 0.3s;"></i>
                </div>
            </div>

            <!-- Accordion Content -->
            ${accordionHtml}
            
        </div>`;
    });

    html += `</div>`;
    mainEl.innerHTML = html;
}

// (Old Visual Cutter removed - consolidated into single definition below at line ~3923)

// Old Sidebar functions removed (renderB2BSidebarTree, toggleTree, b2bFilter)


// ============================================
// DASHBOARD (Middle Panel - "Cockpit")
// ============================================

window.renderB2BDashboard = function () {
    const detailEl = document.getElementById('b2b-product-detail');
    if (!detailEl) return;

    // 1. Data Analysis (Global Stock/Catalog)
    let totalItems = products.length;
    let seriesCounts = { '20': 0, '30': 0, '40': 0, 'Accessory': 0 };

    products.forEach(p => {
        if (p.type === '鋁材') {
            if (p.series.startsWith('20')) seriesCounts['20']++;
            if (p.series.startsWith('30')) seriesCounts['30']++;
            if (p.series.startsWith('40')) seriesCounts['40']++;
        } else {
            seriesCounts['Accessory']++;
        }
    });

    // 2. Dashboard HTML Structure: Split into Display (Top) and Stats (Bottom)
    let html = `
        <div id="b2b-middle-display" style="padding:10px 10px 0 10px; text-align:center;">
             <div style="font-size:1.2rem; font-weight:300; margin-bottom:2px; letter-spacing:2px; color:#2c3e50;">
                LUTU <span class="pro-tag" style="background:#2c3e50; color:white; font-size:0.75rem; padding:1px 5px;">PRO</span> 訂單數據中心
            </div>
            <div style="color:#7f8c8d; margin-bottom:5px; font-size:0.8rem;">請從左側選擇商品，或直接匯入 BOM 表</div>

        </div>
        
        <div id="b2b-middle-stats" style="margin-top:5px; border-top:1px solid #eee; padding-top:10px; transition:all 0.3s;">
             <!-- Stats will be injected here by renderAnalysisAndManifest -->
             <div style="text-align:center; color:#999; font-size:0.9rem;">
                <i class="fas fa-chart-pie"></i> 購物車為空，尚無分析數據
             </div>
        </div>
    `;

    detailEl.innerHTML = html;

    // Attempt to render stats if cart has items
    if (cart.length > 0) {
        renderAnalysisAndManifest();
    }
};

// Render the Table View for a Series (Unified with Code Injection)
function renderSeriesOverview(series) {
    const mainEl = document.querySelector('.b2b-product-panel');
    if (!mainEl) return;

    // Use flex proportion from CSS

    // Use Unified Products List
    let items = products.filter(p => p.series && p.series.startsWith(series));

    // Header (Simplified: Direct Flex Children)
    let html = `
        <div class="b2b-series-index-header" style="padding: 15px 15px 0 15px; flex-shrink:0;">
            <h2 style="margin-bottom:12px; color:#2c3e50; font-size:1.2rem; font-weight:800;"><i class="fas fa-th-list"></i> ${series} 系列</h2>
            <div class="b2b-table-header" style="font-size:0.85rem; padding:8px 0; border-bottom:2px solid #eee; margin-bottom:5px;">
                <div class="col-img" style="flex:0 0 65px;">圖</div>
                <div class="col-name" style="padding-left:8px;">品名 / 規格</div>
                <div class="col-price" style="text-align:right; padding-right:8px;">單價</div>
                <div class="col-action" style="flex:0 0 20px;"></div>
            </div>
        </div>
        <div id="b2b-series-list" class="b2b-product-list" style="flex:1; overflow-y:auto; padding:0 15px 15px 15px; min-height:0;">
    `;

    items.forEach(p => {
        let imgUrl = (p.img2d) ? `assets/${p.img2d}` : 'https://placehold.co/50';

        // --- SMART CODE INJECTION & HYBRID NAMING ---
        let displayName = p.name;
        let mainCodeHtml = "";
        let skuCode = "";
        let subItemsHtml = ""; // Declare once

        // Prepare "Clean Name" for Matching
        let cleanNameForMatch = p.name.replace(/\(含.*?\)/, '').replace(/組$/, '').trim();

        // 1. MATCHING LOGIC (Run for ALL items)
        let match = findB2BItem(p.name);
        if (!match) {
            match = findB2BItem(`${series}-${cleanNameForMatch}`);
        }

        if (match) {
            skuCode = parseSKU(match.name);
            let b2bBaseName = removeSKU(match.name).trim(); // e.g. "40-合金把手"

            // Extract Set Info from B2C Name (e.g. "(含M8螺絲x2...)")
            let flowInfo = "";
            let setMatch = p.name.match(/(\(含.*?\))/);
            if (setMatch) flowInfo = " " + setMatch[1];

            // Construct Hybrid Name (Avoid redundancy if B2B name already contains set info)
            displayName = b2bBaseName;
            const fullB2BName = match.name; // Includes SKU if present
            if (flowInfo && !fullB2BName.includes('(含')) {
                displayName += flowInfo;
            }

            if (skuCode) {
                mainCodeHtml = `<span class="sku-badge sku-badge-${series}">[${skuCode}]</span>`;
            }
        }

        // 2. DECOMPOSITION LOGIC (Only if contains brackets)
        if (p.name.includes('(') && p.name.includes(')')) {
            let subMap = new Map();
            extractAndAddScrewNutsToMap(p.name, 1, parseInt(series), subMap);

            if (subMap.size > 0) {
                subItemsHtml = `<div style="margin-top:4px; padding-left:10px; border-left:2px solid #ddd;">`;
                subMap.forEach((qty, key) => {
                    let partMatch = findB2BItem(key);
                    let subSku = partMatch ? parseSKU(partMatch.name) : '';
                    let codeHtml = subSku ? `<span class="sku-badge sku-badge-${series}">[${subSku}]</span>` : '';
                    let cleanPartName = key.replace(/^\d+-/, '');
                    subItemsHtml += `<div class="b2b-sub-item-row">${codeHtml} ${cleanPartName} <span style="font-weight:bold; margin-left:5px;">x${qty}</span></div>`;
                });
                subItemsHtml += `</div>`;
            }
        }

        // Display price with proper unit
        let priceDisplay = p.price;
        let unitDisplay = p.unit || '個';
        if (p.type === '鋁材') {
            unitDisplay = 'cm';
        }

        // Weight Display for Left Panel
        let weightHtml = '';
        if (p.type === '鋁材') {
            let wm = weightMap[p.name]; // weightMap is global
            if (wm) {
                weightHtml = `<span style="font-size:0.75rem; color:#888; margin-left:5px; background:#f0f0f0; padding:1px 4px; border-radius:3px;">${wm} kg/m</span>`;
            }
        }

        // Accordion Content HTML (Hidden by default)
        let rowId = 'batch-' + Math.random().toString(36).substr(2, 5);
        let accordionHtml = '';

        if (p.type === '鋁材') {
            accordionHtml = `
                <div class="product-accordion-content" onclick="event.stopPropagation()" style="display:none; padding:15px; margin-top:10px; background:#f8f9fa; border-radius:8px; border:1px dashed #ddd;">
                     <div id="${rowId}" class="batch-input-container" onclick="event.stopPropagation()">
                         <!-- Default Row 1 -->
                         <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                              <input type="number" class="detail-input input-len" placeholder="長度(cm)" min="10" step="0.1" style="flex:1;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
                              <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:70px;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
                         </div>
                     </div>
                     
                     <div style="display:flex; gap:10px; padding-top:10px; border-top:1px solid #eee;">
                         <button onclick="event.stopPropagation(); addBatchRow('${rowId}')" class="btn-secondary" style="flex:1; padding:8px; border:1px solid #ccc; background:white; color:#555; border-radius:4px; cursor:pointer;">
                             <i class="fas fa-plus"></i> 新增規格
                         </button>
                         <button onclick="event.stopPropagation(); addToCartBatch('${p.name}', '${rowId}', this)" class="btn-primary" style="flex:2; padding:8px; background:#2c3e50; color:white; border:none; border-radius:4px; cursor:pointer;">
                             加入清單 <i class="fas fa-arrow-right"></i>
                         </button>
                     </div>
                     <div class="add-feedback" style="display:none; text-align:center; font-size:0.8rem; color:#27ae60; margin-top:5px; font-weight:bold;">
                        <i class="fas fa-check"></i> 已加入
                    </div>
                </div>`;
        } else {
            // Accessories: Just Qty
            accordionHtml = `
                <div class="product-accordion-content" onclick="event.stopPropagation()" style="display:none; padding:15px; margin-top:10px; background:#f8f9fa; border-radius:8px; border:1px dashed #ddd;">
                     <div id="${rowId}" class="batch-input-container" onclick="event.stopPropagation()">
                         <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                              <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:100%;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
                         </div>
                     </div>
                     <div style="padding-top:10px; border-top:1px solid #eee;">
                         <button onclick="event.stopPropagation(); addToCartBatch('${p.name}', '${rowId}', this)" class="btn-primary" style="width:100%; padding:8px; background:#2c3e50; color:white; border:none; border-radius:4px; cursor:pointer;">
                             加入清單
                         </button>
                     </div>
                      <div class="add-feedback" style="display:none; text-align:center; font-size:0.8rem; color:#27ae60; margin-top:5px; font-weight:bold;">
                        <i class="fas fa-check"></i> 已加入
                    </div>
                </div>`;
        }


        // Define Series Color
        let sColor = '#999';
        if (p.series && p.series.startsWith('20')) sColor = '#3498db';
        if (p.series && p.series.startsWith('30')) sColor = '#e67e22';
        if (p.series && p.series.startsWith('40')) sColor = '#2ecc71';

        html += `
        <div class="b2b-product-row b2b-series-${series}" 
             data-product-name="${p.name}"
             style="padding:0; border-bottom:1px solid #f1f2f6; transition:all 0.2s;">
            
            <div style="display:flex; padding:12px 10px; cursor:pointer;" onclick="toggleProductAccordion(this.parentElement, '${p.name}')">
                <div class="col-img" style="flex:0 0 65px; position:relative;">
                    <img src="${imgUrl}" class="b2b-thumb" style="width:65px; height:65px; border-radius:4px; object-fit: cover; cursor:zoom-in;" onclick="event.stopPropagation(); showLightbox(this.src)">
                    <div style="position:absolute; bottom:0; left:0; padding:1px 4px; border-radius:0 4px 0 0; background:${sColor}; color:white; font-size:0.7rem; font-weight:bold;">${p.series.split('-')[0]}</div>
                </div>
                <div class="col-name" style="padding-left:12px; min-width:0; flex:1;">
                    <div style="font-weight:bold; font-size:0.95rem; color:#2c3e50; line-height:1.2; margin-bottom:2px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${displayName}</div>
                    <div style="font-size:0.8rem; color:#666; font-weight:500;">${mainCodeHtml} ${weightHtml}</div>
                    ${subItemsHtml}
                </div>
                <div class="col-price" style="flex:0 0 90px; display:flex; flex-direction:column; justify-content:center; align-items:flex-end; font-size:0.9rem; font-weight:600; color:#444;">
                    <div><span style="color:#e74c3c;">$${priceDisplay}</span></div>
                    <div style="font-size:0.75rem; color:#999; font-weight:normal;">/${unitDisplay}</div>
                    <i class="fas fa-chevron-down accordion-arrow" style="margin-top:5px; color:#ddd; transition:transform 0.3s;"></i>
                </div>
            </div>
            
            ${accordionHtml}
        </div>`;
    });

    html += `</div>`;
    mainEl.innerHTML = html;
}

// ===== ACCORDION LOGIC (Left Panel) =====

window.toggleProductAccordion = function (rowEl, productName) {
    // 0. SAFETY: Prevent toggling if clicking inside the content (Inputs, Buttons)
    // Use window.event for inline handler compatibility
    let e = window.event;
    if (e && e.target) {
        if (e.target.closest('.product-accordion-content')) return;
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON') return;
    }

    // 1. Determine current state
    let wasActive = rowEl.classList.contains('active-row');

    // 2. Close OTHER rows only
    document.querySelectorAll('.b2b-product-row').forEach(row => {
        if (row !== rowEl && row.classList.contains('active-row')) {
            let c = row.querySelector('.product-accordion-content');
            let a = row.querySelector('.accordion-arrow');
            if (c) c.style.display = 'none';
            if (a) a.style.transform = 'rotate(0deg)';
            row.classList.remove('active-row');
        }
    });

    // 3. Toggle CURRENT row
    let content = rowEl.querySelector('.product-accordion-content');
    let arrow = rowEl.querySelector('.accordion-arrow');

    if (wasActive) {
        // It was open, now Close it
        if (content) content.style.display = 'none';
        if (arrow) arrow.style.transform = 'rotate(0deg)';
        rowEl.classList.remove('active-row');
    } else {
        // It was closed, now Open it
        if (content) content.style.display = 'block';
        if (arrow) arrow.style.transform = 'rotate(180deg)';
        rowEl.classList.add('active-row');
    }
};

window.addToCartSimple = function (productName, btnEl) {
    // 1. Find Inputs
    let container = btnEl.parentElement; // .product-accordion-content
    let qtyInput = container.querySelector('.input-qty');
    let lenInput = container.querySelector('.input-len');

    let qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
    let len = lenInput ? parseFloat(lenInput.value) : 0;

    if (lenInput && (isNaN(len) || len < 10)) {
        alert("請輸入有效長度 (最小 10cm)");
        return;
    }

    // 2. Add to Cart (Reuse global addToCart logic manually or call standard func?)
    // Standard addToCart takes (id, qty, len, name...).
    // Let's find product first.
    let product = products.find(p => p.name === productName);
    if (!product) return;

    // Construct item object
    let newItem = {
        id: Date.now().toString() + Math.random().toString(36).substr(2, 5), // Unique Instance ID
        productId: product.id, // Keep reference to original product ID
        name: product.name,
        price: product.price,
        type: product.type, // '鋁材' or '配件'
        series: product.series,
        len: len,
        qty: qty,
        unit: product.unit || '個',
        img: product.img2d
    };

    // Logic from original addToCart
    // We need to push to 'cart' array and refresh.
    // Check duplicates? Original logic allows duplicates for different lengths.
    // For simplicity, just push.
    cart.push(newItem);

    // 3. Feedback
    // Show checkmark
    let feedback = container.querySelector('.add-feedback');
    if (feedback) {
        feedback.style.display = 'block';
        setTimeout(() => feedback.style.display = 'none', 2000);
    }

    // Reset inputs? Maybe keep for rapid entry.

    // 4. BIG UPDATE: Refresh RIGHT PANEL (Cart) and MIDDLE PANEL (Visuals)
    renderAnalysisAndManifest();
};

// Render Product Display to Middle Panel (Pure Display)
window.renderProductDisplayToMiddle = function (productName) {
    const container = document.getElementById('b2b-product-detail');
    if (!container) return;

    let product = products.find(p => p.name === productName);
    if (!product) return;

    let imgUrl = (product.img2d) ? `assets/${product.img2d}` : 'https://placehold.co/400x400?text=' + encodeURIComponent(product.name);

    // Toggle 3D visual logic
    // Same ID as before to reuse logic, or simplified
    let toggleBtnHtml = '';
    if (product.img3d) {
        toggleBtnHtml = `
            <button onclick="toggle3DView(this, 'assets/${product.img2d}', 'assets/${product.img3d}')"
                    style="position:absolute; bottom:20px; right:20px; background:white; border:none; padding:8px 15px; border-radius:20px; box-shadow:0 4px 10px rgba(0,0,0,0.1); font-weight:bold; color:#2c3e50; cursor:pointer;">
                <i class="fas fa-cube"></i> 切換 3D
            </button>`;
    }

    let html = `
        <div style="padding:40px; text-align:center; animation: fadeIn 0.3s ease;">
            <div style="background:white; border-radius:12px; padding:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05); position:relative; display:inline-block; max-width:100%;">
                <div class="b2b-detail-img-container" style="height:300px; display:flex; align-items:center; justify-content:center;">
                    <img src="${imgUrl}" style="max-height:100%; max-width:100%; object-fit:contain;">
                    ${toggleBtnHtml}
                </div>
            </div>
            
            <div style="margin-top:30px;">
                <span style="background:#2c3e50; color:white; padding:4px 12px; border-radius:20px; font-size:0.8rem; letter-spacing:1px;">${product.series} SERIES</span>
                <h1 style="color:#2c3e50; font-size:1.8rem; margin:15px 0 10px 0;">${product.name}</h1>
                <div style="color:#7f8c8d; font-size:1rem;">
                    單價: <span style="color:#e74c3c; font-weight:bold;">$${product.price}</span> / ${product.unit || '個'}
                </div>
            </div>
        </div>
    `;

    // Check if we also need to show Stats (Sticky Top?)
    // This function REPLACES content, so it might overwrite Stats if they are in the same container.
    // Wait! The plan is: Middle Panel = Visuals/Stats + Product Display.
    // If I overwrite innerHTML, the stats are gone.
    // I should create TWO sections in the middle panel: #b2b-stats-area and #b2b-display-area.

    // But currently `b2b-product-detail` is one big div.
    // I will dynamically check if the structure exists, if not create it.
    // OR: simpler approach -> The "Intelligence Hub" is the DEFAULT view.
    // When a product is selected, we show product info ABOVE or RELOW the stats?
    // User said: "Middle can fix more images and info display".
    // AND "Move cutting visuals to middle".

    // Ideally: Top of Middle = Product Display (if selected). Bottom of Middle = Cutting Stats (Always).
    // Let's implement that structure.

    // 1. Get current content. If it doesn't have the split structure, build it.
    if (!container.querySelector('#b2b-middle-display')) {
        container.innerHTML = `
            <div id="b2b-middle-display"></div>
            <div id="b2b-middle-stats" style="margin-top:20px; border-top:1px solid #eee; padding-top:20px;"></div>
        `;
    }

    document.getElementById('b2b-middle-display').innerHTML = html;
};

// B2B Sidebar also should use 'products' (Unified)
function renderB2BSidebarTree() {
    const navEl = document.querySelector('.b2b-nav');
    if (!navEl) return;

    if (!products || products.length === 0) return;

    let html = '';
    const groups = ['20', '30', '40'];

    groups.forEach(series => {
        let items = products.filter(p => p.series && p.series.startsWith(series));
        if (items.length === 0) return;

        html += `
        <div class="b2b-tree-group">
            <div class="b2b-tree-header" onclick="toggleTree(this, '${series}')">
                <span><i class="fas fa-folder"></i> ${series} 系列</span>
                <i class="fas fa-chevron-right arrow"></i>
            </div>
            <div class="b2b-tree-children">
        `;

        items.forEach(p => {
            // Should also inject code here? Maybe too crowded. Keep simple name.
            // Or maybe just [Code]?
            html += `
             <div class="b2b-tree-item" onclick="b2bSelectProduct('${p.id}', this)">
                <i class="fas fa-file-alt" style="font-size:0.8rem; opacity:0.7;"></i> ${p.name}
             </div>`;
        });

        html += `</div></div>`;
    });

    html += `<div class="b2b-nav-divider"></div>`;
    html += `<button class="b2b-nav-item" onclick="returnToHub()"><i class="fas fa-sign-out-alt"></i> 退出企業版</button>`;

    navEl.innerHTML = html;
}

// ===== SPLIT-SCREEN PRODUCT SELECTION =====

// Select product in list and show details in right panel (NEW split-screen approach)
window.selectProductInList = function (productName) {
    // 1. Remove all selected states from ALL product rows first
    document.querySelectorAll('.b2b-product-row').forEach(row => {
        row.classList.remove('selected', 'selected-20', 'selected-30', 'selected-40');
    });

    // 2. Find the product from B2C products array
    let product = products.find(p => p.name === productName);
    if (!product) {
        console.error('Product not found:', productName);
        return;
    }

    // 2. Highlight the clicked product with series-specific class
    const selectedRow = document.querySelector(`[data-product-name="${productName}"]`);
    if (selectedRow) {
        // Remove existing selection classes
        selectedRow.classList.remove('selected', 'selected-20', 'selected-30', 'selected-40');

        // Add specific class based on series
        if (product.series) {
            const seriesPrefix = product.series.substring(0, 2); // '20', '30', '40'
            selectedRow.classList.add(`selected-${seriesPrefix}`);
        } else {
            selectedRow.classList.add('selected');
        }

        selectedRow.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    if (!product) {
        console.error('Product not found:', productName);
        return;
    }

    // 4. Render product details in right panel
    renderProductDetailPanel(product);
};

// Render product detail panel in the right side
// Render product detail panel in the right side
function renderProductDetailPanel(p) {
    const container = document.getElementById('b2b-product-detail');
    if (!container) return;

    let isProfile = (p.type === '鋁材');
    // Default to 3D if available
    let initialIs3D = !!(p.img3d);
    let imgUrl = (initialIs3D) ? `assets/${p.img3d}` : (p.img2d) ? `assets/${p.img2d}` : 'https://placehold.co/200x200?text=' + encodeURIComponent(p.name);

    // Find b2b SKU
    let b2bItem = findB2BItem(p.name);
    let skuCode = b2bItem ? parseSKU(b2bItem.name) : null;

    // Unit display
    let unitDisplay = p.unit || '個';
    if (isProfile) unitDisplay = 'cm';

    // Series Colors
    const seriesColors = {
        '20': '#3498db', // Blue
        '30': '#e67e22', // Orange
        '40': '#2ecc71'  // Green
    };
    const mainColor = seriesColors[p.series] || '#555';

    // Highlight SKU and Series with color
    let skuBadgeHTML = skuCode ? `<div style="position:absolute; top:8px; right:8px; background:rgba(255,255,255,0.95); padding:4px 8px; border-radius:6px; font-size:0.8rem; color:${mainColor}; font-weight:bold; font-family:monospace; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #eee;">[${skuCode}]</div>` : '';

    // Series Badge Style
    let seriesBadge = `<div style="position:absolute; top:8px; left:8px; background:rgba(255,255,255,0.95); padding:4px 8px; border-radius:6px; font-size:0.8rem; font-weight:bold; color:${mainColor}; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #eee;">${p.series} 系列</div>`;


    // Input Fields
    let inputSection = '';
    if (isProfile) {
        inputSection = `
            <div class="b2b-input-card">
                <label style="display:block; margin-bottom:12px; color:#2c3e50; font-weight:700; font-size:0.95rem;">
                    <i class="fas fa-tools"></i> 裁切規格 (長度 x 數量)
                </label>
                <div id="detail-input-rows">
                    <div class="detail-row-flex">
                        <input type="number" class="detail-input input-len" placeholder="長度(cm)" step="0.1" min="10" oninput="calculateLiveSubtotal(${p.price}, true)">
                        <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" oninput="calculateLiveSubtotal(${p.price}, true)">
                        <button class="btn-xs" onclick="if(document.querySelectorAll('.detail-row-flex').length > 1) this.parentElement.remove(); calculateLiveSubtotal(${p.price}, true);" 
                                style="background:#fff; color:#e74c3c; border:1px solid #fee2e2; padding:8px 12px; border-radius:8px; cursor:pointer; flex: 0 0 auto;">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
                <button onclick="addDetailRow()" class="btn-xs btn-outline" style="margin-top:10px; width:100%; height:40px; border-style:dashed; border-width:2px; font-weight:600;">
                    <i class="fas fa-plus"></i> 新增規格組合
                </button>
            </div>
        `;
    } else {
        inputSection = `
            <div class="b2b-input-card">
                <label style="display:block; margin-bottom:10px; color:#2c3e50; font-weight:700; font-size:0.95rem;">📦 訂購數量</label>
                <input type="number" id="detail-qty" class="detail-input" value="1" min="1"
                       style="width:100%; padding:12px; border:1px solid #ddd; border-radius:8px; font-size:1.2rem; text-align:center; font-weight:bold; box-sizing:border-box;"
                       oninput="calculateLiveSubtotal(${p.price}, false)">
            </div>
        `;
    }

    let toggleBtnHtml = '';
    if (p.img3d) {
        // If defaulting to 3D, button should show "2D" (active state)
        // User wants "2D" button to be WHITE
        toggleBtnHtml = `
            <button onclick="toggle3DView(this, 'assets/${p.img2d}', 'assets/${p.img3d}')" 
                    class="active-3d"
                    data-series-color="${mainColor}"
                    style="position:absolute; bottom:8px; right:8px; background:rgba(255, 255, 255, 0.95); color:${mainColor}; border:none; padding:6px 12px; border-radius:20px; font-size:0.8rem; font-weight:bold; cursor:pointer; box-shadow:0 2px 5px rgba(0,0,0,0.2); transition:all 0.2s; display:flex; align-items:center; gap:5px; z-index:20;">
                <i class="fas fa-image"></i> 2D
            </button>`;
    }

    let html = `
        <div style="padding: 25px; position:relative; display:flex; flex-direction:column; gap:20px; overflow-x: hidden;">
            <!-- Close Button -->
            <button class="btn-xs" onclick="closeProductDetailPanel()" 
                style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.03); border: none; width:32px; height:32px; border-radius:16px; display:flex; align-items:center; justify-content:center; color: #999; cursor: pointer; z-index:10; transition: all 0.2s;">
                <i class="fas fa-times" style="font-size:1rem;"></i>
            </button>

            <!-- Hero Section (Compact) -->
            <div class="b2b-detail-img-container" style="flex: 0 0 auto; width: 100%; ${isProfile ? 'height: 220px;' : 'aspect-ratio:1/1;'} margin: 0 0 10px 0; position: relative; border-radius: 12px; overflow:hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08); background:#fff;">
                <img src="${imgUrl}" style="width:100%; height:100%; display:block; object-fit:contain; box-sizing:border-box;">
                
                <!-- TL: Series -->
                ${seriesBadge}

                <!-- TR: SKU -->
                ${skuBadgeHTML}

                <!-- BL: Price -->
                <div style="position:absolute; bottom:8px; left:8px; background:rgba(255,255,255,0.95); padding:4px 10px; border-radius:6px; box-shadow:0 2px 4px rgba(0,0,0,0.1); border:1px solid #eee; display:flex; align-items:baseline; gap:2px;">
                    <span style="font-size:0.75rem; color:#e74c3c;">NT$</span>
                    <span style="font-size:1.1rem; font-weight:bold; color:#e74c3c;">${p.price}</span>
                    <span style="font-size:0.75rem; color:#999;"> / ${unitDisplay}</span>
                </div>
                
                <!-- 3D Toggle Button (New) -->
                ${toggleBtnHtml}

            </div>

            <!-- 2. Bottom Info -->
            <div class="b2b-detail-info-main" style="width: 100%; text-align:center;">
                <h2 style="font-size: 1.35rem; margin: 5px 0 10px 0; color: #2c3e50; line-height:1.2;">
                    ${p.name}
                </h2>
                <!-- Sub-items List (New) -->
                ${(() => {
            let subItemsHtml = '';
            if (p.name.includes('(') && p.name.includes(')')) {
                let subMap = new Map();
                // Use existing helper
                if (typeof extractAndAddScrewNutsToMap === 'function') {
                    extractAndAddScrewNutsToMap(p.name, 1, parseInt(p.series), subMap);
                }

                if (subMap.size > 0) {
                    subItemsHtml = `<div style="margin-top:12px; padding-top:10px; border-top:1px dashed #eee;">`;
                    subItemsHtml += `<div style="font-size:0.85rem; color:#888; margin-bottom:5px;">包含配件：</div>`;
                    subMap.forEach((qty, key) => {
                        let partMatch = findB2BItem(key); // uses global findB2BItem
                        let subSku = partMatch ? parseSKU(partMatch.name) : '';
                        let codeHtml = subSku ? `<span class="sku-badge sku-badge-${p.series}" style="font-size:0.75rem;">[${subSku}]</span>` : '';
                        let cleanPartName = key.replace(/^\d+-/, ''); // remove Series- prefix
                        subItemsHtml += `<div style="display:flex; align-items:center; gap:5px; font-size:0.9rem; color:#555; margin-bottom:3px;">
                                    ${codeHtml} 
                                    <span>${cleanPartName}</span> 
                                    <span style="font-weight:bold; color:#2c3e50;">x${qty}</span>
                                </div>`;
                    });
                    subItemsHtml += `</div>`;
                }
            }
            return subItemsHtml;
        })()}
            </div>

            <!-- Configuration Options -->
            ${inputSection}

            <!-- Action Bar (Footer) -->
            <div class="b2b-detail-action-bar">
                <div id="detail-live-subtotal" style="font-weight:700; color:#2c3e50; font-size:1rem; white-space:nowrap;">
                    <span style="font-size:0.85rem; color:#666; font-weight:normal;">小計:</span> NT$ 0
                </div>
                <button onclick="addToCartFromDetail('${p.name}')" class="btn-primary"
                    style="background:#2c3e50; color:white; border:none; padding:12px 25px; border-radius:8px; cursor:pointer; font-weight:700; font-size:0.9rem; display:flex; align-items:center; gap:8px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); white-space:nowrap;">
                    <i class="fas fa-plus-circle"></i> 加入 BOM
                </button>
            </div>
        </div>
    `;

    container.innerHTML = html;

    // Set current product price for use in dynamically added rows
    currentProductPrice = p.price;

    // Initial calc
    calculateLiveSubtotal(p.price, isProfile);
}

// Live Subtotal Calculator
window.calculateLiveSubtotal = function (price, isProfile) {
    let total = 0;
    if (isProfile) {
        let rows = document.querySelectorAll('#detail-input-rows .detail-row-flex');
        rows.forEach(row => {
            let len = parseFloat(row.querySelector('.input-len').value) || 0;
            let qty = parseInt(row.querySelector('.input-qty').value) || 0;
            total += (price * len * qty);
        });
    } else {
        let qty = parseInt(document.getElementById('detail-qty').value) || 0;
        total += (price * qty);
    }

    let el = document.getElementById('detail-live-subtotal');
    if (el) el.innerHTML = `<span style="font-size:0.85rem; color:#666; font-weight:normal;">小計:</span> NT$ ${Math.round(total)}`;
}

// Add a new detail row (for aluminum profiles with multiple lengths)
window.addDetailRow = function () {
    let container = document.getElementById('detail-input-rows');
    if (!container) return;

    let div = document.createElement('div');
    div.className = 'detail-row-flex';
    div.innerHTML = `
        <input type="number" class="detail-input input-len" placeholder="長度(cm)" step="0.1" min="10" oninput="calculateLiveSubtotal(${currentProductPrice}, true)">
        <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" oninput="calculateLiveSubtotal(${currentProductPrice}, true)">
        <button class="btn-xs" onclick="if(document.querySelectorAll('.detail-row-flex').length > 1) this.parentElement.remove(); calculateLiveSubtotal(${currentProductPrice}, true);" 
                style="background:#fff; color:#e74c3c; border:1px solid #fee2e2; padding:8px 12px; border-radius:8px; cursor:pointer; flex: 0 0 auto;">
            <i class="fas fa-trash-alt"></i>
        </button>
    `;
    container.appendChild(div);

    // Trigger calculation for the new row (if it has default values)
    calculateLiveSubtotal(currentProductPrice, true);
};

// Close Detail Panel logic
// 3D/2D Toggle Helper
window.toggle3DView = function (btn, img2d, img3d) {
    // Find the image in the same container
    let container = btn.parentElement;
    let img = container.querySelector('img');
    if (!img) return;

    let is3D = btn.classList.contains('active-3d');
    let seriesColor = btn.getAttribute('data-series-color') || '#555';

    if (is3D) {
        // Currently 3D (Showing 2D button, which means image is 3D), User clicked to switch to 2D
        // Wait, "active-3d" means the BUTTON is active/highlighted? Or the VIEW is 3D?
        // In previous logic:
        // default: initialIs3D = true.
        // If 3D, button shows "2D" (meaning "Switch to 2D" or "Show 2D"?). 
        // Logic says: if (is3D) -> switch to 2D. So button was indicating current state or target?
        // Re-reading logic:
        // if (is3D) { img.src = img2d; btn.innerHTML = '3D'; ... }
        // This implies `is3D` (classList.contains('active-3d')) meant "Currently showing 3D, button allows switching to 2D".
        // Let's stick to that logic.

        img.src = img2d;

        // Update Button to "3D" state
        btn.innerHTML = '<i class="fas fa-cube"></i> 3D';
        btn.style.background = 'rgba(44, 62, 80, 0.9)'; // Dark (Default for 3D switch)
        btn.style.color = 'white';
        btn.classList.remove('active-3d');
    } else {
        // Switch to 3D View
        img.src = img3d;

        // Update Button to "2D" state (White background, colored text)
        btn.innerHTML = '<i class="fas fa-image"></i> 2D';
        btn.style.background = 'rgba(255, 255, 255, 0.95)';
        btn.style.color = seriesColor;
        btn.classList.add('active-3d');
    }
};

window.closeProductDetailPanel = function () {
    // 1. Clear Panel content
    let panel = document.getElementById('b2b-product-detail');
    panel.innerHTML = `
        <div class="detail-placeholder">
            👈 請從左側選擇商品查看詳情
        </div>
    `;

    // 2. Remove highlight
    document.querySelectorAll('.b2b-product-row.selected').forEach(el => el.classList.remove('selected'));
}


// B2B Submit Modal Logic
window.openB2BSubmitModal = function () {
    if (cart.length === 0) {
        alert("工單為空，請先加入商品");
        return;
    }

    // Calculate totals
    let total = 0;
    cart.forEach(item => {
        let isAl = (item.type === '鋁材');
        let sub = isAl ? item.price * item.len * item.qty : item.price * item.qty;
        total += sub;
    });

    document.getElementById('b2b-modal-total').innerText = 'NT$' + Math.round(total);
    document.getElementById('b2b-modal-count').innerText = cart.length;
    document.getElementById('b2b-submit-modal').classList.remove('hidden');
}

window.closeB2BSubmitModal = function () {
    document.getElementById('b2b-submit-modal').classList.add('hidden');
}

// Add to cart from detail panel
window.addToCartFromDetail = function (productName) {
    // Find product
    let product = products.find(p => p.name === productName);
    if (!product) {
        console.error('Product not found:', productName);
        return;
    }

    if (product.type === '鋁材') {
        // Collect all length/quantity rows
        let rows = document.querySelectorAll('#detail-input-rows .detail-row-flex');
        let addedCount = 0;

        rows.forEach(row => {
            let lenInput = row.querySelector('.input-len');
            let qtyInput = row.querySelector('.input-qty');
            let length = parseFloat(lenInput.value);
            let qty = parseInt(qtyInput.value);

            if (length < 10 || length > 600) {
                alert("裁切長度必須介於 10 與 600 cm 之間");
                return;
            }

            if (length > 0 && qty > 0) {
                addToCart(product, qty, length, false);
                addedCount++;
                // Clear inputs
                lenInput.value = '';
                qtyInput.value = 1;
            }
        });

        if (addedCount === 0) {
            alert("請輸入有效的長度與數量");
            return;
        }

        // Visual feedback
        const btn = event.target.closest('.btn-add-detail');
        if (btn) {
            const originalText = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> 已加入 ' + addedCount + ' 筆';
            btn.style.background = '#27ae60';
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.style.background = '#2c3e50';
            }, 1500);
        }

    } else {
        // Accessories: single quantity
        let qty = parseInt(document.getElementById('detail-qty').value);
        if (qty > 0) {
            addToCart(product, qty, 0, false);
            document.getElementById('detail-qty').value = 1;

            // Visual feedback
            const btn = event.target.closest('.btn-add-detail');
            if (btn) {
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-check"></i> 已加入';
                btn.style.background = '#27ae60';
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.style.background = '#2c3e50';
                }, 1500);
            }
        } else {
            alert("請輸入數量");
        }
    }

    // Update BOM display
    renderAnalysisAndManifest();
};

// Focus Mode Selection (OLD - kept for backward compatibility with sidebar tree view)
window.b2bSelectProduct = function (nameOrId, el) {
    // Highlight sidebar item
    document.querySelectorAll('.b2b-tree-item').forEach(i => i.classList.remove('selected'));
    if (el) el.classList.add('selected');

    // Find Product from B2C products array (primary source)
    // Try to match by name first (from series overview), then by id (from sidebar)
    let product = products.find(p => p.name === nameOrId || p.id === nameOrId);

    // Fallback to inventory if not found
    if (!product && inventoryProducts.length > 0) {
        product = inventoryProducts.find(p => p.name === nameOrId || p.id === nameOrId);
    }

    if (!product) {
        console.error('Product not found:', nameOrId);
        return;
    }

    renderFocusPanel(product);
}

function renderFocusPanel(p) {
    const mainEl = document.querySelector('.b2b-product-panel'); // Reusing Left Panel container
    // Clear list view styles
    mainEl.innerHTML = '';
    mainEl.style.flex = "6"; // Ensure size

    let isProfile = (p.type === '鋁材');
    let imgUrl = (p.img2d) ? `assets/${p.img2d}` : 'https://placehold.co/300';

    let inputSection = '';

    if (isProfile) {
        inputSection = `
            <div class="focus-input-area">
                <label style="display:block; margin-bottom:10px; font-weight:bold;">輸入裁切規格</label>
                <div id="focus-input-rows">
                    <div class="focus-row">
                        <input type="number" class="focus-input input-len" placeholder="長度 (mm)" step="1">
                        <input type="number" class="focus-input input-qty" placeholder="數量" value="1">
                    </div>
                </div>
                <button class="btn-xs btn-outline" onclick="addFocusRow()" style="margin-top:5px;">+ 新增規格列</button>
            </div>
        `;
    } else {
        inputSection = `
            <div class="focus-input-area">
                <label style="display:block; margin-bottom:10px; font-weight:bold;">輸入訂購數量</label>
                <div class="focus-row">
                    <input type="number" id="focus-qty-single" class="focus-input" placeholder="數量" value="1" style="font-size:1.5rem; text-align:center;">
                </div>
            </div>
        `;
    }

    let html = `
        <div style="padding: 20px;">
            <!-- Back Button -->
            <button class="btn-xs btn-outline" onclick="returnToSeriesOverview()" style="margin-bottom: 15px;">
                <i class="fas fa-arrow-left"></i> 返回 ${currentB2BSeries} 系列總覽
            </button>
            
            <div class="focus-card">
                <div class="focus-img-container">
                    <img src="${imgUrl}" class="focus-main-img">
                    <div style="text-align:center; color:#999; font-size:0.8rem;">料號: ${p.id || p.name}</div>
                </div>
                <div class="focus-info">
                    <div class="focus-title">${p.name}</div>
                    <div class="focus-meta">${p.series}系列 / ${p.type} / 單位: ${p.unit}</div>
                    
                    <div class="focus-price-box">
                        <span>建議售價</span>
                        <span class="focus-price">$${p.price}</span>
                    </div>
                    
                    ${inputSection}
                    
                    <button class="btn-add-focus" onclick="addToCartFocus('${p.name}')">
                        <i class="fas fa-plus-circle"></i> 加入工單
                    </button>
                </div>
            </div>
        </div>
    `;

    // Inject into Main Panel (overwriting table)
    document.querySelector('.b2b-product-panel').innerHTML = html;
}

window.addFocusRow = function () {
    let container = document.getElementById('focus-input-rows');
    let div = document.createElement('div');
    div.className = 'focus-row';
    div.innerHTML = `
        <input type="number" class="focus-input input-len" placeholder="長度 (mm)" step="1">
        <input type="number" class="focus-input input-qty" placeholder="數量" value="1">
        <button class="btn-xs" style="background:#e74c3c; color:white; border:none;" onclick="this.parentElement.remove()">x</button>
    `;
    container.appendChild(div);
}

window.addToCartFocus = function (nameOrId) {
    // Find product from B2C products array (primary source for correct pricing)
    let product = products.find(p => p.name === nameOrId || p.id === nameOrId);

    // Fallback to inventory if not found
    if (!product && inventoryProducts.length > 0) {
        product = inventoryProducts.find(p => p.name === nameOrId || p.id === nameOrId);
    }

    if (!product) {
        console.error('Product not found in addToCartFocus:', nameOrId);
        return;
    }

    if (product.type === '鋁材') {
        // Collect all rows
        let rows = document.querySelectorAll('#focus-input-rows .focus-row');
        let addedCount = 0;
        rows.forEach(row => {
            let lenInput = row.querySelector('.input-len');
            let qtyInput = row.querySelector('.input-qty');
            let len = parseFloat(lenInput.value);
            // Convert mm to cm if user inputs mm? The placeholder says mm. 
            // Existing logic uses cm. Let's assume input needs /10.
            // Wait, standard UI was cm. Let's keep cm.
            if (len) len = len / 10;

            let qty = parseInt(qtyInput.value);

            if (len > 0 && len <= 600 && qty > 0) {
                addToCart(product, qty, len, false);
                addedCount++;
                // Clear inputs visually
                lenInput.value = '';
                qtyInput.value = 1;
            }
        });

        if (addedCount === 0) alert("請輸入有效的長度 (max 6000mm) 與數量");

    } else {
        let qty = parseInt(document.getElementById('focus-qty-single').value);
        if (qty > 0) {
            addToCart(product, qty, 0, false);
            document.getElementById('focus-qty-single').value = 1;
        } else {
            alert("請輸入數量");
        }
    }

    renderAnalysisAndManifest(); // Update charts

    // Visual Feedback
    let btn = document.querySelector('.btn-add-focus');
    btn.innerHTML = '<i class="fas fa-check"></i> 已加入';
    btn.style.background = '#27ae60';
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-plus-circle"></i> 加入工單';
        btn.style.background = '#2c3e50';
    }, 1000);
}

// Global Weight Map
const weightMap = {
    '2020型': 0.458, '2040型': 0.862,
    '3030輕型': 0.693, '3030重型': 1.07, '3060輕型': 1.218, '3060重型': 1.844,
    '4040輕型': 1.298, '4040重型': 1.923, '4080輕型': 2.265, '4080重型': 3.505
};

// --- B2B Dashboard Logic ---

function renderB2BDashboard() {
    renderB2BProductTable();
    renderAnalysisAndManifest();
}

function b2bFilter(s) { }
function b2bSearch() { }
function renderB2BProductTable() { }
function addToCartB2B(id) { } // Replaced by addToCartFocus


// Consolidated Analysis & Manifest Render
function renderAnalysisAndManifest() {
    // 1. Right Panel List
    const listEl = document.getElementById('b2b-cart-list');

    // 2. Middle Panel Stats (New Target)
    const middleStatsEl = document.getElementById('b2b-middle-stats');

    // 3. Fallback (Old Right Panel Charts)
    const legacyChartEl = document.getElementById('b2b-analysis-charts');

    if (!listEl) return;

    // --- Generate Manifest (Cart List) ---
    // Group by Projects (if supported) or just flat
    let groupedCart = { '未分類工單': [] };
    let total = 0;
    let totalWeight = 0;

    // Cutting Logic Prep
    let cuts = [];
    let efficiency = 0;
    let rawBarsNeeded = 0;
    let maxLen = 0; // Track max length for shipping logic
    // Map same as Step 293
    // Use Global Weight Map if available, else local fallback
    // weightMap is defined above at line 2923

    // Populate Grouped Cart & Calc Total Price
    cart.forEach(item => {
        let pName = '未分類工單'; // TODO: Support Project tagging
        if (!groupedCart[pName]) groupedCart[pName] = [];
        groupedCart[pName].push(item);

        let sub = (item.type === '鋁材') ? item.price * item.len * item.qty : item.price * item.qty;
        total += sub;

        if (item.type === '鋁材') {
            let w = weightMap[item.name] || 1;
            totalWeight += (w * (item.len / 100) * item.qty); // len in cm, w in kg/m
            if (item.len > maxLen) maxLen = item.len;

            // Add to cuts for simulation
            for (let i = 0; i < item.qty; i++) {
                cuts.push({ length: item.len, name: item.name });
            }
        } else {
            totalWeight += (0.05 * item.qty); // Est. accessory weight
        }
    });

    let totalEl = document.getElementById('b2b-total-price');
    if (totalEl) totalEl.innerText = `NT$ ${Math.round(total)}`;

    // Render List HTML
    let listHtml = '';
    for (let [groupName, items] of Object.entries(groupedCart)) {
        if (items.length === 0) continue;
        // Group Header? Optional. For now flat list look is cleaner.
        items.forEach((item, index) => {
            let spec = (item.type === '鋁材') ? `L:${item.len}` : '';

            // Weight Calc for Right Panel
            let weightInfo = '';
            if (item.type === '鋁材') {
                let w = weightMap[item.name] || 0;
                let unitW = (w * (item.len / 100)); // kg per piece
                if (w > 0) weightInfo = `<span style="color:#7f8c8d;">${unitW.toFixed(2)}kg</span>`;
            }

            // SKU Logic
            let skuHtml = '';
            let match = findB2BItem(item.name);
            if (match) {
                let code = parseSKU(match.name);
                if (code) {
                    let sColor = (item.series === '20') ? '#3498db' : (item.series === '30' ? '#e67e22' : '#2ecc71');
                    if (item.series === 'Accessory' || !item.series) sColor = '#999';
                    skuHtml = `<span style="font-size:0.75rem; color:${sColor}; border:1px solid ${sColor}40; padding:0 3px; border-radius:3px; margin-left:5px;">${code}</span>`;
                }
            }

            let sub = (item.type === '鋁材') ? item.price * item.len * item.qty : item.price * item.qty;
            let itemColor = (item.series === '20') ? '#0369a1' : (item.series === '30' ? '#b45309' : '#15803d');
            if (item.type !== '鋁材') itemColor = '#555';

            let itemImgUrl = item.img ? `assets/${item.img}` : 'https://placehold.co/40';

            // Series Badge Logic
            let seriesValue = "";
            let sBadgeColor = '#999';
            if (item.series) {
                seriesValue = item.series.split('-')[0];
                if (seriesValue === '20') sBadgeColor = '#3498db';
                else if (seriesValue === '30') sBadgeColor = '#e67e22';
                else if (seriesValue === '40') sBadgeColor = '#2ecc71';
            }

            listHtml += `
                 <div class="b2b-cart-item" style="display:flex; align-items:center; gap:12px; padding:10px 0; border-bottom:1px solid #f0f0f0;">
                     <div class="cart-item-thumb" style="flex:0 0 45px; position:relative;">
                         <img src="${itemImgUrl}" style="width:45px; height:45px; border-radius:4px; object-fit: cover; cursor:zoom-in;" onclick="showLightbox(this.src)">
                         ${seriesValue ? `<div style="position:absolute; bottom:0; left:0; padding:1px 3px; border-radius:0 4px 0 4px; background:${sBadgeColor}; color:white; font-size:0.6rem; font-weight:bold; line-height:1;">${seriesValue}</div>` : ''}
                     </div>
                     <div style="flex:1; min-width:0;">
                        <div style="font-weight:400; color:${itemColor}; line-height:1.2; display:flex; align-items:baseline; justify-content:space-between; gap:5px;">
                            <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis; flex:1;">${item.name}</div>
                            <div style="flex-shrink:0;">${skuHtml}</div>
                        </div>
                        <div style="font-size:0.8rem; color:#7f8c8d; margin-top:2px; display:flex; align-items:center; gap:6px;">
                            <span>${spec}</span>
                            ${weightInfo ? `<span style="opacity:0.4; font-size:0.7rem;">|</span> ${weightInfo}` : ''}
                        </div>
                        <div style="font-size:0.7rem; color:#aaa; margin-top:1px; font-family:monospace;">
                            $${item.price}/${item.unit}${item.len > 0 ? ` × ${item.len}cm` : ''}
                        </div>
                     </div>
                     <div style="text-align:right; flex:0 0 80px;">
                        <div style="font-weight:300; font-size:1rem; color:#2c3e50;">x${item.qty}</div>
                        <div style="color:#555; font-size:0.95rem; font-weight:300; letter-spacing:0.5px;">$${Math.round(sub)}</div>
                     </div>
                     <button onclick="removeFromCartB2B('${item.id || index}')" style="background:none; border:none; color:#ddd; cursor:pointer; padding:5px;">
                        <i class="fas fa-times"></i>
                     </button>
                 </div>
             `;
        });
    }
    listEl.innerHTML = listHtml;


    // --- Think & Render Visuals (Logic ported from previous steps) ---
    // If we have stats container
    let statsTarget = middleStatsEl || legacyChartEl;
    if (statsTarget) {

        // 1. Generate Visuals
        let visualsHtml = "";
        if (typeof renderCuttingVisualsPreview === 'function') {
            visualsHtml = renderCuttingVisualsPreview();
        }

        // 2. Generate Weight Stats
        let statsHtml = `
            <div style="display:flex; align-items:center; justify-content:space-around; background:#f8f9fa; padding:15px; border-radius:8px; margin-top:20px;">
                <div style="text-align:center;">
                    <div style="font-size:0.8rem; color:#7f8c8d;">預估總重</div>
                    <div style="font-size:1.5rem; font-weight:300; color:#2c3e50; letter-spacing:1px;">${totalWeight.toFixed(1)} <span style="font-size:0.9rem;">kg</span></div>
                </div>
                 <div style="text-align:center;">
                    <div style="font-size:0.8rem; color:#7f8c8d;">物流建議</div>
                    <div style="font-size:1.1rem; font-weight:300; color:#2980b9; letter-spacing:1px;">
                        ${(maxLen > 250 || totalWeight > 50) ? '<i class="fas fa-truck-moving"></i> 公司配送大貨車' : '<i class="fas fa-truck-pickup"></i> 公司配送小貨車'}
                    </div>
                </div>
            </div>
        `;

        // Combine (Visuals + Stats)
        statsTarget.innerHTML = visualsHtml + statsHtml;
    }
}






window.removeFromCartB2B = function (id) {
    cart = cart.filter(i => i.id !== id);
    renderAnalysisAndManifest();
    renderSpecList(); // Update hidden standard cart just in case
}

window.exportBOM = function () {
    if (cart.length === 0) { alert("清單為空"); return; }

    let csvContent = "data:text/csv;charset=utf-8,\uFEFF"; // BOM for Excel
    csvContent += "品名,規格/型號,長度(cm),數量,單價,總價\n";

    cart.forEach(item => {
        let spec = (item.type === '鋁材') ? `L=${item.len}` : item.series + '系列';
        let sub = (item.type === '鋁材') ? item.price * item.len * item.qty : item.price * item.qty;
        let row = `${item.name},${spec},${item.len || '-'},${item.qty},${item.price},${Math.round(sub)}`;
        csvContent += row + "\n";
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "LUTU_BOM_Listing.csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}

// =========================================================
// BOM Excel Upload & Parsing Logic (Smart Feature)
// =========================================================

let workbook = null;
let excelData = [];

window.openBOMUploadModal = function () {
    document.getElementById('bom-upload-modal').classList.remove('hidden');
}

window.closeBOMUploadModal = function () {
    document.getElementById('bom-upload-modal').classList.add('hidden');
    resetUpload();
}

window.resetUpload = function () {
    document.getElementById('upload-step-1').style.display = 'block';
    document.getElementById('upload-step-2').style.display = 'none';
    document.getElementById('bom-file-input').value = '';
    workbook = null;
    excelData = [];
}

window.handleFileSelect = function (input) {
    const file = input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        workbook = XLSX.read(data, { type: 'array' });

        // Assume data is in the first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        // Convert to JSON (header:1 gives array of arrays)
        const rawBody = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (rawBody.length < 2) {
            alert("檔案內容為空或格式錯誤");
            return;
        }

        processExcelData(rawBody);
    };
    reader.readAsArrayBuffer(file);
}

function processExcelData(rows) {
    // 1. Identify Header Row (Simple heuristic: row with most string columns)
    // For now, assume Row 0 is header
    let headerRow = rows[0];
    let bodyRows = rows.slice(1);

    excelData = bodyRows;

    // Populate selects with column options
    const selects = ['map-name', 'map-len', 'map-qty', 'map-qty-acc', 'map-cat', 'map-series'];
    selects.forEach(id => {
        const select = document.getElementById(id);
        if (!select) return;
        select.innerHTML = '<option value="-1">-- 請選擇欄位 --</option>';
        headerRow.forEach((col, idx) => {
            let option = document.createElement('option');
            option.value = idx;
            option.text = col || `欄位 ${idx + 1}`;
            select.appendChild(option);
        });
    });

    // 3. AI Smart Mapping (Keyword guessing - Improved for LUTU Professional Template)
    headerRow.forEach((colName, index) => {
        let str = colName.toString().toLowerCase();

        // LUTU Professional Mapping Pattern
        if (str.includes('品項') || str.includes('官方') || str.includes('正確名稱') || (str.includes('品名') && !str.includes('類'))) {
            document.getElementById('map-name').value = index;
        }
        if (str.includes('大類') || str.includes('分類')) {
            document.getElementById('map-cat').value = index;
        }
        if (str.includes('系列') || str.includes('類型') || str.includes('series')) {
            document.getElementById('map-series').value = index;
        }
        if (str.includes('長') || (str.includes('len') && !str.includes('類'))) {
            document.getElementById('map-len').value = index;
        }
        // Unified Quantity Pattern
        if (str.includes('數量') || str.includes('qty') || str.includes('訂購') || str.includes('需數量')) {
            document.getElementById('map-qty').value = index;
        }
    });

    // Switch to Step 2
    document.getElementById('upload-step-1').style.display = 'none';
    document.getElementById('upload-step-2').style.display = 'block';

    updatePreview(headerRow);

    // Listen for select changes to update preview
    selects.forEach(id => {
        document.getElementById(id).onchange = () => updatePreview(headerRow);
    });
}

function updatePreview(headerRow) {
    let nameIdx = parseInt(document.getElementById('map-name').value);
    let lenIdx = parseInt(document.getElementById('map-len').value);
    let qtyIdx = parseInt(document.getElementById('map-qty').value);
    let catIdx = parseInt(document.getElementById('map-cat').value);
    let seriesIdx = parseInt(document.getElementById('map-series').value);

    let previewEl = document.getElementById('upload-preview');
    let html = '<table style="width:100%; border-collapse:collapse;"><thead><tr style="background:#eee; text-align:left;">';
    html += `<th style="padding:5px;">${nameIdx >= 0 ? headerRow[nameIdx] : '未指定品名'}</th>`;
    html += `<th style="padding:5px;">規格 / 數值</th>`;
    html += `<th style="padding:5px;">狀態</th></tr></thead><tbody>`;

    let validCount = 0;
    let errorCount = 0;

    excelData.forEach((row, rowIndex) => {
        let rawName = nameIdx >= 0 ? (row[nameIdx] || '') : '';
        let qVal = qtyIdx >= 0 ? (row[qtyIdx] || '') : '';
        let rawLen = lenIdx >= 0 ? (row[lenIdx] || '') : '';
        let rawCat = catIdx >= 0 ? (row[catIdx] || '') : '';
        let rawSeries = seriesIdx >= 0 ? (row[seriesIdx] || '') : '';

        if (!rawName && !rawLen && !qVal) return;

        const isInstruction = row.some(cell => cell && cell.toString().includes('💡'));
        if (isInstruction || rawName.toString().includes('請勿更動') || rawName.toString().includes('填寫說明')) {
            html += `<tr style="border-bottom:1px solid #f1f2f6; background:#fff9db; opacity:0.8;">`;
            html += `<td style="padding:5px;">${rawName || '說明'}</td>`;
            html += `<td style="padding:5px;">L:${rawLen} / Q:-</td>`;
            html += `<td style="padding:5px; color:#f39c12;"><i>說明列 (已略過)</i></td>`;
            html += `</tr>`;
            return;
        }

        let match = findProductMatch(rawName, rawCat, rawSeries);
        let statusHtml = '';

        if (match) {
            let actualQty = qVal;
            // matchTotal++; // This variable is not defined in this scope, removed.
            let qtyVal = parseInt(actualQty);
            if (isNaN(qtyVal) || qtyVal <= 0) {
                statusHtml = `<span style="color:#e67e22;"><i class="fas fa-exclamation-triangle"></i> 匹配至預計點 [${match.name}] 但無數量</span>`;
                errorCount++;
            } else {
                statusHtml = `<span style="color:#27ae60;"><i class="fas fa-check"></i> ${match.name}</span>`;
                validCount++;
            }
        } else {
            statusHtml = '<span style="color:#e74c3c;"><i class="fas fa-times"></i> 無法辨識</span>';
            errorCount++;
        }

        // Show all rows
        html += `<tr style="border-bottom:1px solid #f1f2f6;">`;
        html += `<td style="padding:5px;">${rawName}</td>`;
        html += `<td style="padding:5px;">L:${rawLen || '-'} / Q:${qVal || '-'}</td>`;
        html += `<td style="padding:5px;">${statusHtml}</td>`;
        html += `</tr>`;
    });

    html += '</tbody></table>';
    previewEl.innerHTML = html;

    document.getElementById('upload-stats').innerHTML =
        `共讀取 ${excelData.length} 筆。 ✅ 成功匹配: <b style="color:#27ae60;">${validCount}</b> | ⚠️ 異常: <b style="color:#e67e22;">${errorCount}</b>`;
}

// Helper function to parse SKU from a string (e.g., "Product Name [SKU]")
function parseSKU(str) {
    const match = str.match(/\[([^\]]+)\]/);
    return match ? match[1] : null;
}

// Helper function to remove SKU from a string
function removeSKU(str) {
    return str.replace(/\s*\[[^\]]+\]/g, '');
}

function findProductMatch(rawName, rawCat = '', rawSeries = '') {
    if (!rawName) return null;
    let str = rawName.toString().trim();

    // Helper to normalize name for matching (strips brackets, SKUs, and punctuation)
    const normalizeForMatch = (s) => {
        if (!s) return "";
        let n = s.toString().toLowerCase().trim();
        n = n.replace(/\[.*?\]/g, ''); // Remove SKU [HR-...]
        n = n.replace(/\(含.*?\)/g, ''); // Remove Set Info (含...)
        n = n.replace(/組$/, ''); // Remove 'Set' suffix (組)
        n = n.replace(/型|系列|鋁擠|profile/g, ''); // Remove common noise
        // Handle leading Series number in B2B names (e.g. 20隱式層板架 -> 隱式層板架)
        // But only if it's followed by a name (don't strip 20 from 2020)
        n = n.replace(/^(20|30|40)(?![0-9])/, '');
        n = n.replace(/[^\u4e00-\u9fa5a-z0-9]/g, ''); // Keep only Alphanumeric + Chinese
        return n;
    };

    const targetNorm = normalizeForMatch(str);
    const targetSeries = (rawSeries || '').toString().replace('系列', '').trim();

    // 1. Precise Match with STRICT Series Enforcement
    let b2bMatch = b2bRawData.find(item => {
        const itemNorm = normalizeForMatch(item.name);
        const itemSeries = item.series;

        // Exact Name Match
        const isNameMatch = (item.name === str || removeSKU(item.name).trim() === str || itemNorm === targetNorm);
        if (!isNameMatch) return false;

        // CRITICAL: If Excel specifies a series, it MUST match the database series exactly.
        // This prevents items like "Hinge" from 30/40 series being merged into 20 series.
        const excelSeries = (rawSeries || '').toString().replace('系列', '').trim();
        if (excelSeries && itemSeries !== excelSeries) return false;

        return true;
    });
    // 2. Sort out ambiguity (If we found a match but it wasn't the series we wanted)
    // Try again with stricter series filter if we have multiple candidates
    if (b2bMatch && targetSeries && b2bMatch.series !== targetSeries) {
        let betterMatch = b2bRawData.find(item => normalizeForMatch(item.name) === targetNorm && item.series === targetSeries);
        if (betterMatch) b2bMatch = betterMatch;
    }

    // 2. Map back to Catalog Object
    if (b2bMatch) {
        let baseName = removeSKU(b2bMatch.name).trim();
        let p = products.find(prod => {
            let pName = prod.name.trim();
            // Strict Series Check when mapping to products catalog
            if (prod.series !== b2bMatch.series) return false;

            if (pName === baseName) return true;
            if (normalizeForMatch(pName) === targetNorm) return true;
            return false;
        });
        if (p) {
            return { ...p, b2b: b2bMatch };
        } else {
            // Fallback product if not in B2C but in B2B
            return {
                id: baseName,
                name: baseName,
                series: b2bMatch.series,
                price: 0,
                unit: (b2bMatch.type === '鋁材') ? 'cm' : '個',
                type: b2bMatch.type,
                img2d: '',
                b2b: b2bMatch
            };
        }
    }

    // 4. Last stand: Direct keyword matching in products (with SERIES CHECK)
    let direct = products.find(p => {
        // Enforce series match if we have a resolved series
        if (b2bMatch && p.series !== b2bMatch.series) return false;

        if (normalizeForMatch(p.name) === targetNorm) return true;

        // Also check if b2bMatch exists as a substring
        if (b2bMatch && p.name.includes(removeSKU(b2bMatch.name))) return true;
        return false;
    });
    if (direct) return { ...direct, b2b: b2bMatch || { type: direct.cat || direct.type } };

    // Common Profile Keywords (Special handling for profiles)
    // Profiles are unique enough that name match is usually sufficient
    if (targetNorm === "2020" || targetNorm === "20") return products.find(p => p.name === '2020型');
    if (targetNorm === "2040") return products.find(p => p.name === '2040型');
    if (targetNorm === "3030" || targetNorm === "30") return products.find(p => p.name.includes('3030') && p.name.includes('輕'));
    if (targetNorm === "3060") return products.find(p => p.name.includes('3060') && p.name.includes('輕'));
    if (targetNorm === "4040" || targetNorm === "40") return products.find(p => p.name.includes('4040') && p.name.includes('輕'));
    if (targetNorm === "4080") return products.find(p => p.name.includes('4080') && p.name.includes('輕'));
    if (targetNorm === "4080") return products.find(p => p.name.includes('4080') && p.name.includes('輕'));

    return null;
}

window.processBOMImport = function processBOMImport() {
    let nameIdx = parseInt(document.getElementById('map-name').value);
    let lenIdx = parseInt(document.getElementById('map-len').value);
    let qtyIdx = parseInt(document.getElementById('map-qty').value);
    let catIdx = parseInt(document.getElementById('map-cat').value);
    let seriesIdx = parseInt(document.getElementById('map-series').value);

    if (nameIdx < 0 || qtyIdx < 0) {
        alert("請確認欄位對應正確。必須包含「品項名稱」與「數量」欄位。");
        return;
    }

    let successCount = 0;
    let skipCount = 0;
    let matchTotal = 0;

    excelData.forEach(row => {
        let rawName = nameIdx >= 0 ? (row[nameIdx] || '') : '';
        if (!rawName) return;

        const isInstruction = row.some(cell => cell && cell.toString().includes('💡'));
        if (isInstruction || rawName.toString().includes('請勿更動') || rawName.toString().includes('填寫說明')) return;

        let rawCat = catIdx >= 0 ? (row[catIdx] || '') : '';
        let rawSeries = seriesIdx >= 0 ? (row[seriesIdx] || '') : '';

        let matchInfo = findProductMatch(rawName, rawCat, rawSeries);
        if (matchInfo) {
            matchTotal++;
            let p = matchInfo;
            let type = p.cat || p.type || (p.b2b ? p.b2b.type : '配件');
            // Intelligence: Unified quantity
            let qtyStr = (row[qtyIdx] || '');

            let qty = parseInt(qtyStr);
            let len = lenIdx >= 0 ? parseFloat(row[lenIdx]) : 0;

            if (isNaN(qty) || qty <= 0) {
                skipCount++;
                return;
            }

            // Unit conversion for aluminum (mm to cm)
            if (type === '鋁材') {
                // Smart mm detection: Only convert if > 600 (Max Valid CM)
                if (len > 600) len = len / 10;

                // Round to 1 decimal place to avoid precision issues
                len = Math.round(len * 10) / 10;

                // Enforcement: Skip if < 10 or > 600
                if (len < 10 || len > 600) {
                    skipCount++;
                    return;
                }
            }

            addToCart(p, qty, len, false);
            successCount++;
        }
    });

    if (successCount > 0) {
        alert(`匯入完成！成功將 ${successCount} 個品項加入清單。`);
        closeBOMUploadModal();
        renderAnalysisAndManifest();
    } else if (matchTotal > 0) {
        alert(`識別到 ${matchTotal} 個商品，但因「數量」為空或為 0 而未能匯入。請檢查 Excel 數量欄位是否有填寫，或確認欄位對應是否正確。`);
    } else {
        alert("匯入失敗，未能識別出任何有效商品。請確認您的品名是否與 LUTU 官方範本一致，或嘗試下載最新範本填寫。");
    }
}

// Hook standard functions to update B2B dash if cart changes elsewhere (unlikely but safe)
const originalRenderCart = renderCart;
renderCart = function () {
    originalRenderCart();
    if (typeof renderAnalysisAndManifest === 'function') renderAnalysisAndManifest();
};

window.submitB2BOrder = function (e) {
    e.preventDefault();

    if (cart.length === 0) {
        alert("工單為空，無法送出");
        return;
    }

    // Reuse existing loading animation
    if (typeof triggerLoadingAnimation === 'function') {
        triggerLoadingAnimation();
    }

    let btn = e.target.querySelector('button[type="submit"]');
    if (btn) { btn.disabled = true; btn.innerText = "傳送中..."; }

    let formData = new FormData(e.target);
    let customerData = Object.fromEntries(formData.entries());

    // Calculate total
    let total = 0;
    cart.forEach(item => {
        let isAl = (item.type === '鋁材' && item.unit === 'cm');
        let sub = isAl ? item.price * item.len * item.qty : item.price * item.qty;
        total += sub;
    });

    // Mark as B2B Quote
    customerData.note = "[企業詢價] " + (customerData.note || "");
    customerData.delivery = "公司配送"; // Set unified Company Delivery for B2B

    // Inject exact official name (with brackets and SKU) before sending B2B order
    let enrichedCart = cart.map(item => {
        let exactName = item.name;
        if (typeof b2bRawData !== 'undefined' && b2bRawData.length > 0) {
            let match = b2bRawData.find(raw => {
                let rBase = String(raw.name || "").split('[')[0].split('(')[0].trim();
                let iBase = String(item.name || "").split('[')[0].split('(')[0].trim();
                if (!rBase || !iBase) return false;

                let rStripped = rBase.replace(/^(20|30|40)(?![0-9])/, '');
                let iStripped = iBase.replace(/^(20|30|40)(?![0-9])/, '');

                let isNameMatch = rBase === iBase || rStripped === iStripped || rStripped === iBase || iStripped === rBase;
                let isSeriesMatch = !item.series || !raw.series || String(raw.series) === String(item.series);
                return isNameMatch && isSeriesMatch && (!item.type || !raw.type || item.type === raw.type);
            });

            if (!match) {
                match = b2bRawData.find(raw => {
                    let rBase = String(raw.name || "").split('[')[0].split('(')[0].trim();
                    let iBase = String(item.name || "").split('[')[0].split('(')[0].trim();
                    if (!rBase || !iBase) return false;

                    if (rBase.length > 2 && iBase.length > 2) {
                        let isNameMatch = rBase.includes(iBase) || iBase.includes(rBase);
                        let isSeriesMatch = !item.series || !raw.series || String(raw.series) === String(item.series);
                        if (isNameMatch && isSeriesMatch && (!item.type || !raw.type || item.type === raw.type)) return true;
                    }
                    return false;
                });
            }
            if (match && match.name) exactName = match.name;
        }
        return Object.assign({}, item, { name: exactName });
    });

    let payload = {
        customer: customerData,
        items: enrichedCart,
        totalEst: Math.round(total),
        shippingFee: 0
    };

    // Use global API_URL
    fetch(API_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(payload)
    })
        .then(function () {
            setTimeout(function () {
                if (typeof hideLoadingAnimation === 'function') hideLoadingAnimation();

                alert("企業詢價單已送出！\n\n我們會盡快透過 Email 或電話與您聯繫報價事宜。\n(若需正式報價單 PDF，請查收 Email)");

                // Clear cart
                cart = [];
                renderCart(); // Updates both views logic
                closeB2BSubmitModal();
                e.target.reset();

            }, 6000);
        })
        .catch(function (err) {
            console.error(err);
            if (typeof hideLoadingAnimation === 'function') hideLoadingAnimation();
            alert("發送失敗，請稍後再試。");
        })
        .finally(function () {
            if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fas fa-check-circle"></i> 確認送出'; }
        });
}

/**
 * 下載全品項公版 BOM 範本 (CSV)
 * 依照 B2B 官方品項名稱與料號列出，並加入首行填寫教學
 */
window.downloadBOMTemplate = function () {
    const headers = ["產品分類", "系列別", "官方品項名稱", "長度(cm)", "預計訂購數量"];

    // 第一行增加填寫說明 (讓客人知道填哪裏)
    const instructionRow = ["💡 填寫指引：", "<- 自動分類", "<- 請勿更動文字", "請輸入長度 (cm, 10~600, 可小數)", "請在此輸入數量"];

    // Generate product rows from b2bRawData
    const productRows = b2bRawData.map(item => {
        const series = item.series + "系列";
        const type = item.type;
        const name = removeSKU(item.name).trim(); // Remove [Code] for template
        // Default length for aluminum profiles
        const defaultLen = (item.type === '鋁材') ? "" : "0";
        return [type, series, name, defaultLen, ""]; // 5 columns total
    });

    const allRows = [instructionRow, ...productRows];

    // 使用 \ufeff 確保 Excel 開啟時能正確識別 UTF-8 編碼 (防止中文亂碼)
    let csvContent = "\ufeff";

    // Function to escape CSV cell
    const escapeCSV = (cell) => {
        const str = String(cell);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
            return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
    };

    csvContent += headers.map(escapeCSV).join(",") + "\n";

    allRows.forEach(row => {
        csvContent += row.map(escapeCSV).join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "LUTU_BOM_全品項訂購公版.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// ===========================================
// BATCH INPUT LOGIC (Step 34)
// ===========================================

window.addBatchRow = function (containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Create new row
    let div = document.createElement('div');
    div.className = 'batch-row';
    div.style.display = 'flex';
    div.style.gap = '10px';
    div.style.alignItems = 'center';
    div.style.marginBottom = '10px';
    div.innerHTML = `
        <input type="number" class="detail-input input-len" placeholder="長度(cm)" min="10" step="0.1" style="flex:1;">
        <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:70px;">
        <button onclick="this.parentElement.remove(); event.stopPropagation();" style="border:none; background:none; color:#e74c3c; cursor:pointer;" title="移除此行">
            <i class="fas fa-times"></i>
        </button>
    `;
    // Append
    container.appendChild(div);
}

window.addToCartBatch = function (productName, containerId, btnEl) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let product = products.find(p => p.name === productName);
    if (!product) return;

    let rows = container.querySelectorAll('.batch-row');
    let addedCount = 0;

    rows.forEach(row => {
        let lenInput = row.querySelector('.input-len');
        let qtyInput = row.querySelector('.input-qty');

        let qty = parseInt(qtyInput ? qtyInput.value : 1) || 1;
        let len = lenInput ? parseFloat(lenInput.value) : 0;

        // Validate
        if (product.type === '鋁材' && (isNaN(len) || len < 10)) {
            return; // Skip invalid
        }

        // MERGE LOGIC: Check if exact item exists
        let existingItem = null;

        if (product.type === '鋁材') {
            // For Aluminum: Match Name + Length
            existingItem = cart.find(i => i.name === product.name && Math.abs(i.len - len) < 0.01);
        } else {
            // For Accessories: Match Name
            existingItem = cart.find(i => i.name === product.name);
        }

        if (existingItem) {
            existingItem.qty += qty;
        } else {
            // Create New
            let newItem = {
                id: Date.now().toString() + Math.random().toString(36).substr(2, 5),
                productId: product.id,
                name: product.name,
                price: product.price,
                type: product.type,
                series: product.series,
                len: len,
                qty: qty,
                unit: product.unit || '個',
                img: product.img2d
            };
            cart.push(newItem);
        }
        addedCount++;
    });

    if (addedCount > 0) {
        // Show Feedback
        let parent = container.parentElement;
        let feedback = parent.querySelector('.add-feedback');
        if (feedback) {
            feedback.innerHTML = `<i class="fas fa-check"></i> 已加入 ${addedCount} 筆資料`;
            feedback.style.display = 'block';
            setTimeout(() => feedback.style.display = 'none', 2000);
        }

        // Refresh Cart logic
        renderAnalysisAndManifest();

        // Reset: keep one empty row
        container.innerHTML = `
            <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                <input type="number" class="detail-input input-len" placeholder="長度(cm)" min="10" step="0.1" style="flex:1;">
                <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:70px;">
            </div>
         `;
        if (product.type !== '鋁材') {
            container.innerHTML = `
                <div class="batch-row" style="display:flex; gap:10px; align-items:center; margin-bottom:10px;">
                    <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:100%;">
                </div>
             `;
        }
    } else {
        alert("請輸入有效的數量或長度");
    }
}

// ===============================================
// BATCH INPUT HELPERS (Restored)
// ===============================================

window.addBatchRow = function (containerId) {
    let container = document.getElementById(containerId);
    if (!container) return;

    // Create new row
    let div = document.createElement('div');
    div.className = 'batch-row';
    div.style.cssText = 'display:flex; gap:10px; align-items:center; margin-bottom:10px;';

    // Check if it's Aluminum (has .input-len)
    let firstRow = container.querySelector('.batch-row');
    let isAl = firstRow && firstRow.querySelector('.input-len');

    if (isAl) {
        div.innerHTML = `
            <input type="number" class="detail-input input-len" placeholder="長度(cm)" min="10" step="0.1" style="flex:1;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
            <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:70px;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
            <button onclick="event.stopPropagation(); this.parentElement.remove()" style="border:none; background:none; color:#e74c3c; cursor:pointer;" title="移除"><i class="fas fa-minus-circle"></i></button>
        `;
    } else {
        div.innerHTML = `
            <input type="number" class="detail-input input-qty" placeholder="數量" value="1" min="1" style="width:100%;" onclick="event.stopPropagation()" onmousedown="event.stopPropagation()" ondblclick="event.stopPropagation()">
            <button onclick="event.stopPropagation(); this.parentElement.remove()" style="border:none; background:none; color:#e74c3c; cursor:pointer;" title="移除"><i class="fas fa-minus-circle"></i></button>
        `;
    }

    container.appendChild(div);
};

window.addToCartBatch = function (productName, containerId, btnEl) {
    if (window.event) window.event.stopPropagation();

    let container = document.getElementById(containerId);
    if (!container) return;

    let rows = container.querySelectorAll('.batch-row');
    let product = products.find(p => p.name === productName);
    if (!product) return;

    let addedCount = 0;

    rows.forEach(row => {
        let qtyInput = row.querySelector('.input-qty');
        let lenInput = row.querySelector('.input-len');

        let qty = parseInt(qtyInput ? qtyInput.value : 0);
        let len = lenInput ? parseFloat(lenInput.value) : 0;

        if (qty > 0) {
            if (product.type === '鋁材') {
                if (len > 0 && len <= 600) {
                    addToCart(product, qty, len, false);
                    addedCount++;
                    if (lenInput) lenInput.value = '';
                    qtyInput.value = 1;
                }
            } else {
                addToCart(product, qty, 0, false);
                addedCount++;
                if (qtyInput) qtyInput.value = 1;
            }
        }
    });

    if (addedCount > 0) {
        let parent = btnEl.closest('.product-accordion-content');
        let feedback = parent ? parent.querySelector('.add-feedback') : null;

        if (feedback) {
            feedback.innerHTML = `<i class="fas fa-check"></i> 已加入 ${addedCount} 筆`;
            feedback.style.display = 'block';
            setTimeout(() => feedback.style.display = 'none', 2000);
        }

        renderAnalysisAndManifest();
    } else {
        alert("請輸入有效的數量或長度");
    }
};

// ===============================================
// AI CUTTING SIMULATION (Visuals) - Ported & Fixed
// ===============================================

window.renderCuttingVisualsPreview = function () {
    // 1. Filter Aluminum Items
    let alItems = cart.filter(i => i.type === '鋁材' && i.len > 0);
    if (alItems.length === 0) return '';

    // 2. Group by Profile Name (e.g. 3030輕型, 3060重型) - different profiles must be cut separately
    let profileGroups = {};
    alItems.forEach(i => {
        let key = i.name; // e.g. "3030輕型", "3060重型"
        if (!profileGroups[key]) profileGroups[key] = { series: i.series || '20', items: [] };
        profileGroups[key].items.push(i);
    });

    let profileNames = Object.keys(profileGroups).sort();

    // Constant
    const BAR_LEN = 600;
    const KERF = 0.5;
    let colorMap = { '20': '#6b8db0', '30': '#b08850', '40': '#5e8a5e' };

    let finalHtml = `
        <div style="background:white; border:1px solid #e0e0e0; border-radius:8px; overflow:hidden; margin-bottom:15px; box-shadow:0 2px 5px rgba(0,0,0,0.05);">
            <div style="background:#2c3e50; color:white; padding:8px 12px; display:flex; justify-content:space-between; align-items:center;">
                <div style="font-weight:300; font-size:0.9rem; letter-spacing:1px;"><i class="fas fa-microchip"></i> AI 切割排版模擬</div>
                <div style="background:#4a6b5a; color:white; padding:2px 8px; border-radius:10px; font-size:0.75rem; font-weight:300; letter-spacing:0.5px;">Smart Plan</div>
            </div>
            <div style="padding:12px; max-height:300px; overflow-y:auto;">
    `;

    // 3. Loop through each profile type (e.g. 3030輕型, 3030重型, 3060輕型)
    profileNames.forEach((profileName, sIdx) => {
        let group = profileGroups[profileName];
        let series = group.series;

        // Prepare Cuts for this profile
        let cuts = [];
        group.items.forEach(i => {
            for (let k = 0; k < i.qty; k++) cuts.push(i.len);
        });

        // Sort descending
        cuts.sort((a, b) => b - a);

        // Greedy Packing
        let bars = [];

        cuts.forEach(cutLen => {
            let cost = cutLen + KERF;
            let bar = bars.find(b => (b.filled + cost) <= BAR_LEN);
            if (bar) {
                bar.filled += cost;
                bar.parts.push(cutLen);
            } else {
                bars.push({ filled: cost, parts: [cutLen] });
            }
        });

        if (bars.length === 0) return;

        // Calc Efficiency
        let totalUsed = bars.reduce((acc, b) => acc + b.filled, 0);
        let totalCapacity = bars.length * BAR_LEN;
        let efficiency = Math.round((totalUsed / totalCapacity) * 100);
        let barColor = colorMap[series] || '#999';

        // Generate Bars HTML
        let barsHtml = '';
        bars.forEach((bar) => {
            let partsHtml = '';
            bar.parts.forEach(p => {
                let pct = (p / BAR_LEN) * 100;
                partsHtml += `<div style="width:${pct}%; background:${barColor}; color:white; font-size:0.75rem; display:flex; align-items:center; justify-content:center; border-right:1px solid rgba(255,255,255,0.3); overflow:hidden;" title="${p}cm">${p}</div>`;
            });
            let remain = BAR_LEN - bar.filled;
            let remainPct = (remain / BAR_LEN) * 100;
            if (remain > 0) {
                partsHtml += `<div style="width:${remainPct}%; background:#ecf0f1; color:#bdc3c7; font-size:0.75rem; display:flex; align-items:center; justify-content:center; overflow:hidden;" title="餘料 ${remain}cm">餘 ${remain}</div>`;
            }
            barsHtml += `
            <div style="height:24px; width:100%; background:#ecf0f1; border-radius:4px; margin-bottom:5px; display:flex; overflow:hidden;">
                ${partsHtml}
            </div>`;
        });

        // Append Profile Block
        let topBorder = sIdx > 0 ? 'border-top:1px dashed #eee; margin-top:15px; padding-top:10px;' : '';

        finalHtml += `
            <div style="${topBorder}">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.9rem; color:#555;">
                    <div style="font-weight:300; color:${barColor}; letter-spacing:0.5px;">${profileName}</div>
                    <div style="font-weight:300;">利用率: <span style="font-weight:400;">${efficiency}%</span> (${bars.length} 支原料)</div>
                </div>
                <div>${barsHtml}</div>
            </div>
        `;
    });

    finalHtml += `
            <div style="margin-top:10px; font-size:0.75rem; color:#999; text-align:center; border-top:1px solid #f0f0f0; padding-top:8px;">
                * 此模擬為「單筆訂單」優先排版，實際生產可能會與其他工單合併裁切以優化利用率。
            </div>
        </div>
    </div>`;

    return finalHtml;
}

/* =========================================================================
   MOBILE SIDEBAR TOGGLE (Hamburger Menu)
   2026/02/20
   ========================================================================= */
window.toggleMobileSidebar = function () {
    const sidebar = document.getElementById('b2cSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const hamburger = document.getElementById('mobileHamburger');
    if (!sidebar) return;

    const isOpen = sidebar.classList.contains('mobile-open');

    if (isOpen) {
        sidebar.classList.remove('mobile-open');
        if (overlay) overlay.classList.remove('active');
        if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('mobile-open');
        if (overlay) overlay.classList.add('active');
        if (hamburger) hamburger.innerHTML = '<i class="fas fa-times"></i>';
        document.body.style.overflow = 'hidden';
    }
};

// Auto-close sidebar when a nav item is clicked on mobile
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('b2cSidebar');
    if (!sidebar) return;

    sidebar.addEventListener('click', function (e) {
        const navItem = e.target.closest('.nav-item');
        if (navItem && window.innerWidth <= 1024) {
            // Small delay to let the navigation happen first
            setTimeout(function () {
                window.toggleMobileSidebar();
            }, 150);
        }
    });

    // Close sidebar if window resizes above tablet breakpoint
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('mobile-open');
            const overlay = document.getElementById('sidebarOverlay');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
            const hamburger = document.getElementById('mobileHamburger');
            if (hamburger) hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});
