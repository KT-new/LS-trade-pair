// 等待頁面完全載入
document.addEventListener('DOMContentLoaded', function() {
    // 獲取元素引用
    const numItemsInput = document.getElementById('numItems');
    const contentTypeSelect = document.getElementById('contentType');
    const generateBtn = document.getElementById('generateBtn');
    const resultContainer = document.getElementById('resultContainer');
    const copyBtn = document.getElementById('copyBtn');
    const clearBtn = document.getElementById('clearBtn');
    
    // 設置生成按鈕的點擊事件
    generateBtn.addEventListener('click', generateContent);
    
    // 設置複製按鈕的點擊事件
    copyBtn.addEventListener('click', copyResult);
    
    // 設置清除按鈕的點擊事件
    clearBtn.addEventListener('click', clearResult);
    
    // 內容生成函數
    function generateContent() {
        // 獲取用戶輸入
        const numItems = parseInt(numItemsInput.value);
        const contentType = contentTypeSelect.value;
        
        // 驗證輸入
        if (isNaN(numItems) || numItems < 1) {
            alert('請輸入有效的項目數量');
            return;
        }
        
        let result = '';
        
        // 根據所選類型生成內容
        switch(contentType) {
            case 'option1':
                result = generateOption1Content(numItems);
                break;
            case 'option2':
                result = generateOption2Content(numItems);
                break;
            case 'option3':
                result = generateOption3Content(numItems);
                break;
            default:
                result = '請選擇有效的內容類型';
        }
        
        // 顯示結果
        resultContainer.textContent = result;
    }
    
    // 選項1的內容生成函數
    function generateOption1Content(numItems) {
        let content = '';
        for (let i = 1; i <= numItems; i++) {
            content += `項目 ${i}: 這是選項1的示例內容\n`;
        }
        return content;
    }
    
    // 選項2的內容生成函數
    function generateOption2Content(numItems) {
        let content = '';
        for (let i = 1; i <= numItems; i++) {
            content += `示例 ${i}: 這是選項2的示例內容\n`;
        }
        return content;
    }
    
    // 選項3的內容生成函數
    function generateOption3Content(numItems) {
        let content = '';
        for (let i = 1; i <= numItems; i++) {
            content += `內容 ${i}: 這是選項3的示例內容\n`;
        }
        return content;
    }
    
    // 複製結果函數
    function copyResult() {
        if (!resultContainer.textContent.trim()) {
            alert('沒有可複製的內容');
            return;
        }
        
        // 創建一個臨時文本區域用於複製
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = resultContainer.textContent;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        
        try {
            // 嘗試複製到剪貼板
            document.execCommand('copy');
            alert('內容已複製到剪貼板');
        } catch (err) {
            alert('複製失敗，請手動複製');
        }
        
        // 移除臨時文本區域
        document.body.removeChild(tempTextArea);
    }
    
    // 清除結果函數
    function clearResult() {
        resultContainer.textContent = '';
    }
});
