import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// 定义文件路径
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const descFilePath = path.join(__dirname, 'desc.json');
const toolsFilePath = path.join(__dirname, 'tools.json');

// 创建主函数来处理异步操作
async function updateDescMd() {
    try {
        // 读取desc.json文件
        const descContent = await fs.readFile(descFilePath, 'utf8');
        const descArray = (JSON.parse(descContent)||[]).reduce((cul,arr)=>{return (Array.isArray(arr)?[cul,...arr]:[cul,arr]).flat()},[]);
        console.log(descArray.length);
        // 读取tools.json文件
        const toolsContent = await fs.readFile(toolsFilePath, 'utf8');
        const toolsArray = JSON.parse(toolsContent);
        
        // 创建一个Map来快速查找desc_md
        const descMap = new Map();
        descArray.forEach(item => {
            if (item.name && item.desc_md) {
                descMap.set(item.name, item.desc_md);
            }
        });
        
        // 统计更新的数量
        let updatedCount = 0;
        
        // 更新tools.json中的desc_md字段
        toolsArray.forEach(tool => {
            if (tool.name && descMap.has(tool.name)) {
                tool.desc_md = descMap.get(tool.name);
                updatedCount++;
            }
        });
        
        // 将更新后的数据写回tools.json
        await fs.writeFile(toolsFilePath, JSON.stringify(toolsArray, null, 2), 'utf8');
        
        console.log(`更新完成！共更新了 ${updatedCount} 个工具的desc_md字段。`);
        
    } catch (error) {
        console.error('处理过程中出现错误：', error.message);
        process.exit(1);
    }
}

// 执行主函数
updateDescMd();