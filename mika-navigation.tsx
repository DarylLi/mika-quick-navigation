import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Home, Cpu, TestTube, Code, Palette, Server, Briefcase, FileText, Wrench, Video, Globe, Menu, Search, Star, Bell, BookOpen, LogIn, ChevronDown, X, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
// 导入工具数据
import toolsData from './tools.json';

// 声明 Trianglify 类型到 window
declare global {
  interface Window {
    Trianglify: any;
  }
}

interface Category {
  icon: LucideIcon;
  color: string;
  subCategories: string[];
}

interface Tool {
  id: number;
  parent_category: number;
  parent_category_name: string;
  sub_category: number | null;
  sub_category_name: string | null;
  name: string;
  description: string;
  desc_md: string;
  url: string;
  icon: string;
  logo: string;
  tags: string;
  order: number;
  is_active: boolean;
  views: number;
  likes_count: number;
  created_at: string;
  updated_at: string;
}

// 用于显示的工具格式
interface DisplayTool {
  name: string;
  desc: string;
  desc_md:string;
  tags: string[];
  color: string;
  link: string;
  icon?: string;
  parent_category?: string;
  sub_category?: string | null;
}

export default function MikaNavigation() {
  const [activeCategory, setActiveCategory] = useState<string>('开发工具');
  const [activeSubCategory, setActiveSubCategory] = useState<string>('开发IDE');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  // 新增状态：控制模态框显示和存储当前选中的工具
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedTool, setSelectedTool] = useState<DisplayTool | null>(null);
  // 关闭模态框时恢复页面滚动
  function closeModal() {
    setShowModal(false);
    setSelectedTool(null);
    document.body.style.overflow = '';
  }
  // 搜索相关状态
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<DisplayTool[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const hotTools:DisplayTool[]=[{
    "id": 255,
    "parent_category": 23,
    "parent_category_name": "开发工具",
    "sub_category": 24,
    "sub_category_name": "开发IDE",
    "name": "IntelliJ IDEA",
    "description": "一款由 JetBrains 开发的 智能 Java 集成开发环境（IDE），专为大型项目和企业级开发设计，Java 开发者的首选工具。",
    "url": "https://www.jetbrains.com/idea/",
    "icon": "https://kjdaohang.com/media/tool_icons/IntelliJ_IDEA.png",
    "logo": "https://kjdaohang.com/media/tool_icons/IntelliJ_IDEA.png",
    "tags": ["Java开发首选"],
    "order": 0,
    "is_active": true,
    "views": 308,
    "likes_count": 0,
    "created_at": "2025-05-22T17:59:29.576330+08:00",
    "updated_at": "2025-05-29T20:22:36.487890+08:00"
}, {
  "id": 254,
  "parent_category": 23,
  "parent_category_name": "开发工具",
  "sub_category": 24,
  "sub_category_name": "开发IDE",
  "name": "VS Code",
  "description": "一款由微软开发的 开源、轻量级、跨平台 代码编辑器，支持几乎所有编程语言，成为全球开发者最喜爱的工具之一",
  "url": "https://code.visualstudio.com/",
  "icon": "https://kjdaohang.com/media/tool_icons/vscode.jpg",
  "logo": "https://kjdaohang.com/media/tool_icons/vscode.jpg",
  "tags": ["微软","开源","万能IDE"],
  "order": 0,
  "is_active": true,
  "views": 252,
  "likes_count": 1,
  "created_at": "2025-05-22T17:58:07.321278+08:00",
  "updated_at": "2025-05-29T18:29:59.179174+08:00"
},    {
  "id": 409,
  "parent_category": 24,
  "parent_category_name": "开发工具",
  "sub_category": null,
  "sub_category_name": "构建工具",
  "name": "Webpack",
  "description": "现代JavaScript应用的静态模块打包器，支持代码拆分和优化。",
  "url": "https://webpack.js.org/",
  "icon": "https://webpack.js.org/favicon.ico",
  "logo": "https://webpack.js.org/icon-pwa-512x512.f352c1530754cb89e192.png",
  "tags": ["JavaScript","打包工具","构建"],
  "order": 1,
  "is_active": true,
  "views": 2200,
  "likes_count": 0,
  "created_at": "2025-07-10T11:00:00+08:00",
  "updated_at": "2025-07-10T11:00:00+08:00"
},{
  "id": 322,
  "parent_category": 23,
  "parent_category_name": "开发工具",
  "sub_category": 25,
  "sub_category_name": "代码协作",
  "name": "Codepen",
  "description": "一个在线前端代码编辑和测试平台，用户可以在此编写、测试和分享HTML、CSS和JavaScript代码。",
  "url": "https://codepen.io/pen/",
  "icon": "https://kjdaohang.com/media/tool_icons/OIP-C_3.jpg",
  "logo": "https://kjdaohang.com/media/tool_icons/OIP-C_3.jpg",
  "tags": ["Web前端","在线代码编辑器"],
  "order": 0,
  "is_active": true,
  "views": 37,
  "likes_count": 0,
  "created_at": "2025-06-10T09:18:12.112395+08:00",
  "updated_at": "2025-06-11T12:22:54.088820+08:00"
},{
  "id": 21,
  "parent_category": 15,
  "parent_category_name": "测试工具",
  "sub_category": 22,
  "sub_category_name": "抓包工具",
  "name": "Charles",
  "description": "一款功能强大的 HTTP 代理工具，主要用于网络抓包、调试和分析 HTTP/HTTPS 等网络协议",
  "url": "https://www.charlesproxy.com",
  "icon": "https://kjdaohang.com/media/tool_icons/charles.png",
  "logo": "https://kjdaohang.com/media/tool_icons/charles.png",
  "tags": ["抓包","HTTP 代理"],
  "order": 0,
  "is_active": true,
  "views": 297,
  "likes_count": 1,
  "created_at": "2025-05-21T18:34:05.569666+08:00",
  "updated_at": "2025-05-30T10:37:48.371977+08:00"
},{
  "id": 434,
  "parent_category": 17,
  "parent_category_name": "开发工具",
  "sub_category": null,
  "sub_category_name": "API工具",
  "name": "Postman",
  "description": "API开发和测试平台，支持API请求创建、调试和自动化测试。",
  "url": "https://www.postman.com/",
  "icon": "https://www.postman.com/favicon.ico",
  "logo": "https://voyager.postman.com/logo/postman-logo-icon-orange.svg",
  "tags": ["API测试","API开发","自动化测试"],
  "order": 1,
  "is_active": true,
  "views": 2500,
  "likes_count": 0,
  "created_at": "2025-07-10T16:00:00+08:00",
  "updated_at": "2025-07-10T16:00:00+08:00"
}, {
  "id": 411,
  "parent_category": 40,
  "parent_category_name": "运维工具",
  "sub_category": null,
  "sub_category_name": "CICD",
  "name": "Jenkins",
  "description": "开源的自动化服务器，支持持续集成和持续部署。",
  "url": "https://www.jenkins.io/",
  "icon": "https://www.jenkins.io/favicon.ico",
  "logo": "https://www.jenkins.io/images/logos/jenkins/Jenkins.svg",
  "tags": ["自动化","CICD","开源"],
  "order": 1,
  "is_active": true,
  "views": 2100,
  "likes_count": 0,
  "created_at": "2025-07-10T11:00:00+08:00",
  "updated_at": "2025-07-10T11:00:00+08:00"
},{
  "id": 447,
  "parent_category": 40,
  "parent_category_name": "运维工具",
  "sub_category": null,
  "sub_category_name": "监控告警",
  "name": "Sentry",
  "description": "开源的错误监控和跟踪平台，帮助开发者实时发现、诊断和修复应用程序错误。",
  "url": "https://sentry.io/",
  "icon": "https://sentry.io/favicon.ico",
  "logo": "https://sentry-brand.storage.googleapis.com/sentry-logo-black.png",
  "tags": ["错误监控","异常跟踪","性能监控"],
  "order": 3,
  "is_active": true,
  "views": 2000,
  "likes_count": 0,
  "created_at": "2025-07-11T11:00:00+08:00",
  "updated_at": "2025-07-11T11:00:00+08:00"
},{
  "id": 413,
  "parent_category": 34,
  "parent_category_name": "设计工具",
  "sub_category": null,
  "sub_category_name": "原型设计",
  "name": "Axure RP",
  "description": "专业的原型设计工具，用于创建网站和应用程序的交互式原型。",
  "url": "https://www.axure.com/",
  "icon": "https://www.axure.com/favicon.ico",
  "logo": "https://www.axure.com/wp-content/uploads/2019/07/axure-logo.svg",
  "tags": ["原型设计","交互设计","专业工具"],
  "order": 1,
  "is_active": true,
  "views": 1700,
  "likes_count": 0,
  "created_at": "2025-07-10T12:00:00+08:00",
  "updated_at": "2025-07-10T12:00:00+08:00"
},{
  "id": 419,
  "parent_category": 40,
  "parent_category_name": "运维工具",
  "sub_category": null,
  "sub_category_name": "容器管理",
  "name": "Docker",
  "description": "开源的容器化平台，使开发者能够打包应用及其依赖项到一个可移植的容器中。",
  "url": "https://www.docker.com/",
  "icon": "https://www.docker.com/favicon.ico",
  "logo": "https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png",
  "tags": ["容器化","虚拟化","开发运维"],
  "order": 1,
  "is_active": true,
  "views": 2500,
  "likes_count": 0,
  "created_at": "2025-07-10T13:00:00+08:00",
  "updated_at": "2025-07-10T13:00:00+08:00"
}];
  const categories: Record<string, Category> = {
    '开发工具': {
      icon: Code,
      color: 'from-green-500 to-teal-500',
      subCategories: ['开发IDE', '低代码/无代码', '静态代码分析', '构建工具', '代码评审', '代码协作']
    },
    '设计工具': {
      icon: Palette,
      color: 'from-pink-500 to-rose-500',
      subCategories: ['流程图设计', '3D设计', '原型设计', 'UI设计']
    },
    '测试工具': {
      icon: TestTube,
      color: 'from-red-500 to-orange-500',
      subCategories: ['AI测试', '抓包工具', 'API测试', '测试管理', '构造数据', '安全测试', '性能测试', '自动化测试', '单元测试']
    },
    '运维工具': {
      icon: Server,
      color: 'from-indigo-500 to-purple-500',
      subCategories: ['容器管理', 'CICD', '自动化运维', '监控告警']
    },
    '办公软件': {
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      subCategories: ['知识库', '问卷表单', '在线文档', '工具箱', 'PDF工具', '在线翻译', '表格处理']
    },
    'AI工具': {
      icon: Cpu,
      color: 'from-purple-500 to-blue-500',
      subCategories: ['AI写作', 'AI绘画', 'AI编程', 'AI音频', 'AI视频', 'AI搜索', 'AI设计', 'AI智能体', 'AI数字人', 'AI办公神器', 'AI智能助手']
    },
    '面试工具': {
      icon: FileText,
      color: 'from-yellow-500 to-orange-500',
      subCategories: ['面试刷题', '简历制作', '求职求聘']
    },
    '实用小工具': {
      icon: Wrench,
      color: 'from-gray-500 to-slate-500',
      subCategories: ['图片压缩', '图片编辑', '翻译工具', '格式转换', '浏览器插件', 'PPT工具', 'Windows工具', '表情包', '在线工具', '二维码制作']
    },
    '自媒体工具': {
      icon: Video,
      color: 'from-red-500 to-pink-500',
      subCategories: ['素材库', '直播录制', '视频下载', '聚合网站', '视频剪辑']
    },
    '资源网站': {
      icon: Globe,
      color: 'from-emerald-500 to-green-500',
      subCategories: ['大模型云平台', '副业项目', '网盘资源', '学习资源', '便民查询', '休闲娱乐']
    }
  };

  // 处理后的工具数据
  const [processedToolsData, setProcessedToolsData] = useState<Record<string, DisplayTool[]>>({});
  const [loading, setLoading] = useState(true);
  // 存储所有工具的完整列表
  const [allTools, setAllTools] = useState<DisplayTool[]>([]);

  // 初始化处理工具数据
  useEffect(() => {
    try {
      // 根据 parent_category_name 和 sub_category_name 对工具进行分类
      const processed: Record<string, DisplayTool[]> = {};
      const allToolsList: DisplayTool[] = [];
      
      toolsData.forEach((tool: Tool) => {
        // 只处理激活状态的工具
        if (!tool.is_active) return;
        
        // 使用子分类名称作为键
        const key = tool.sub_category_name || tool.parent_category_name;
        
        const displayTool: DisplayTool = {
          name: tool.name,
          desc: tool.description || '暂无描述',
          desc_md: tool.desc_md || '暂无描述',
          tags: tool.tags ? tool.tags.split(',').filter(tag => tag.trim()) : [], // 分割标签并过滤空标签
          color: getRandomColor(), // 为每个工具生成随机颜色
          link: tool.url || '#',
          icon: tool.icon || tool.logo, // 优先使用icon，如果没有则使用logo
          parent_category: tool.parent_category_name,
          sub_category: tool.sub_category_name
        };
        
        if (!processed[key]) {
          processed[key] = [];
        }
        
        processed[key].push(displayTool);
        allToolsList.push(displayTool);
      });
      
      // 按浏览量排序工具
      Object.keys(processed).forEach(key => {
        processed[key].sort((a, b) => {
          const indexA = toolsData.findIndex(tool => tool.name === a.name);
          const indexB = toolsData.findIndex(tool => tool.name === b.name);
          const viewsA = indexA !== -1 ? toolsData[indexA].views : 0;
          const viewsB = indexB !== -1 ? toolsData[indexB].views : 0;
          return viewsB - viewsA;
        });
      });
      
      setProcessedToolsData(processed);
      setAllTools(allToolsList);
    } catch (error) {
      console.error('处理工具数据时出错:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 搜索处理函数
  const handleSearch = () => {
    const keyword = searchKeyword;
    if (!keyword.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      // 恢复默认分类
      setActiveCategory('AI工具');
      setActiveSubCategory('AI写作');
      return;
    }
  
    setIsSearching(true);
    // 模拟搜索延迟，提升用户体验
    setTimeout(() => {
      const keywordLower = keyword.toLowerCase().trim();
      const results = allTools.filter(tool => 
        tool.name.toLowerCase().includes(keywordLower) ||
        tool.desc.toLowerCase().includes(keywordLower) ||
        tool.tags.some(tag => tag.toLowerCase().includes(keywordLower))
      );

      setSearchResults(results);

      // 实现搜索结果与左侧导航联动
      if (results.length > 0) {
        const firstResult = results[0];
        
        // 自动设置活动分类和子分类，实现导航联动
        if (firstResult.parent_category) {
          setActiveCategory(firstResult.parent_category);
          
          // 如果有子分类，设置子分类；否则设置为主分类下的第一个子分类
          if (firstResult.sub_category && firstResult.sub_category !== null) {
            setActiveSubCategory(firstResult.sub_category);
          } else if (firstResult.parent_category && categories[firstResult.parent_category]) {
            setActiveSubCategory(categories[firstResult.parent_category].subCategories[0]);
          }
        }
        
        // 确保侧边栏处于打开状态
        setSidebarOpen(true);
      }
    }, 300);
  }

  // 生成随机颜色的辅助函数
  const getRandomColor = () => {
    const colors = [
      '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57',
      '#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43',
      '#ee5253', '#10ac84', '#5f27cd', '#0abde3', '#54a0ff'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  const currentTools = activeSubCategory === 'hotTools' ? hotTools : (processedToolsData[activeSubCategory] || []);
  console.log(currentTools)
  return (
  <div className="flex h-screen bg-gray-50">
      {/* 工具详情模态框 */}
      {showModal && selectedTool && 1===3 &&(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          style={{ backdropFilter: 'blur(2px)' }}
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto animate-fadeIn"
            style={{ width: '95vw', height: '95vh', maxHeight: '95vh' }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
              onClick={closeModal}
              aria-label="关闭"
            >
              <X size={32} />
            </button>
            <div className="flex items-center mb-6 gap-4">
              {selectedTool.icon ? (
                <img src={selectedTool.icon} alt={selectedTool.name} className="w-16 h-16 rounded-lg shadow" />
              ) : (
                <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: selectedTool.color }}>{selectedTool.name.charAt(0)}</div>
              )}
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedTool.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedTool.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{tag.trim()}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="prose max-w-none mb-6" style={{ minHeight: 120, fontSize: 18 }}>
              <ReactMarkdown>{selectedTool.desc_md}</ReactMarkdown>
            </div>
            <div className="flex justify-end gap-4">
              <a
                href={selectedTool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
              >
                访问工具 <ExternalLink className="inline ml-1" size={18} />
              </a>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition"
                onClick={closeModal}
              >
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
        {/* 工具详情模态框 */}
        {showModal && selectedTool && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            style={{ backdropFilter: 'blur(2px)' }}
          >
            <div
              className="modal-dom relative bg-white rounded-2xl shadow-2xl p-8 overflow-y-auto animate-fadeIn"
              style={{ width: '75vw', height: '75vh', maxHeight: '95vh' }}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold z-10"
                onClick={closeModal}
                aria-label="关闭"
              >
                <X size={32} />
              </button>
              <div className="flex items-center mb-6 gap-4">
                {selectedTool.icon ? (
                  <img src={selectedTool.icon} alt={selectedTool.name} className="w-16 h-16 rounded-lg shadow" />
                ) : (
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-2xl" style={{ backgroundColor: selectedTool.color }}>{selectedTool.name.charAt(0)}</div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{selectedTool.name}</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedTool.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">{tag.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="prose max-w-none mb-6" style={{ minHeight: 120, fontSize: 18 }}>
                <ReactMarkdown>{selectedTool.desc_md}</ReactMarkdown>
              </div>
              <div className="flex justify-end gap-4">
                <a
                  href={selectedTool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition"
                >
                  访问工具 <ExternalLink className="inline ml-1" size={18} />
                </a>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition"
                  onClick={closeModal}
                >
                  关闭
                </button>
              </div>
            </div>
          </div>
        )}
      {/* 侧边栏 */}
      <div className={`${sidebarOpen ? 'w-48' : 'w-16'} mk-side-bar border-r border-gray-200 flex flex-col transition-all duration-300`}>
        {/* Logo区域 */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-2 hover:bg-gray-100 rounded-lg">
            <Home size={20} className="text-gray-600"></Home>
          </button>
        </div>


        {/* 热门推荐 */}
        <div className="px-3 pb-2">
        <button className="w-full flex items-center space-x-2 px-3 py-2 text-red-500 bg-red-50 rounded-lg" onClick={() => setActiveSubCategory('hotTools')}>
            <span className="text-xl">🔥</span>
            {sidebarOpen && <span className="text-sm font-bold">热门推荐</span>}
        </button>
        </div>
       
        {/* 分类导航 */}
        <div className="flex-1 overflow-y-auto px-3 space-y-1">
          {Object.entries(categories).map(([name, data]) => {
            const Icon = data.icon;
            const isActive = activeCategory === name;
            return (
              <div key={name}>
                <button
                  onClick={() => {
                    setActiveCategory(name);
                    setActiveSubCategory(data.subCategories[0]);
                  }}
                  className={`w-full flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-blue-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={18} />
                  {sidebarOpen && (
                    <>
                      <span className="text-md font-bold flex-1 text-left">{name}</span>
                      <ChevronDown size={14} className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
                
                {/* 子分类 */}
                {isActive && sidebarOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {data.subCategories.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubCategory(sub)}
                        className={`w-full text-left px-3 py-1.5 rounded text-sm transition ${
                          activeSubCategory === sub
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 顶部导航栏 */}
      <div className='color-change-infinite'>

        <div className="top-content bg-gradient-to-r from-purple-600 via-purple-500 to-blue-500 text-white shadow-lg">
          <div className="px-6 py-3 flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="font-bold text-lg">Mika导航之家</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6 text-sm" style={{'display':'none'}}>
              <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition">
                <Home size={16} />
                <span>首页</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition">
                <Bell size={16} />
                <span>最新上架</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition">
                <Star size={16} />
                <span>喜爱收藏</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition">
                <span>我的导航</span>
              </a>
              <a href="#" className="flex items-center space-x-1 hover:text-purple-200 transition">
                <BookOpen size={16} />
                <span>免费教程</span>
              </a>
              <button className="hover:text-purple-200 transition">收录申请</button>
              <button className="hover:text-purple-200 transition">联系我</button>
            </div>
          {/*
            <button className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-lg transition">
              <LogIn size={16} />
              <span className="text-sm">登录</span>
            </button>
          */}  

          </div>
          {/* 公告栏 */}
          <div className="px-6 pb-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded font-bold">NEW</span>
                <span className="text-sm">最新更新    | Mika导航工具页上线~     2025-10-09</span>
              </div>
            </div>
          </div>
        </div>

        {/* 搜索区域 */}
          <div className="top-content bg-gradient-to-b from-purple-500 to-purple-600 px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-header text-white text-3xl font-bold text-center mb-8">
                工具搜索
              </h1>
              <div className="flex items-center bg-white rounded-full shadow-2xl overflow-hidden">
                <select className="px-6 py-4 bg-transparent border-none outline-none text-gray-700 font-medium">
                  <option>站内</option>
                </select>
                <input 
                  type="text" 
                  placeholder="搜索全网优质工具..."
                  className="flex-1 px-4 py-4 outline-none text-gray-700"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch();
                    }
                  }}
                />
                <button 
                  className="search-button bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 hover:from-blue-600 hover:to-cyan-500 transition"
                  onClick={handleSearch}
                >
                  <Search size={20} />
                </button>
              </div>
            <div className="mt-4 flex items-center justify-center space-x-6 text-white text-sm">
           
              <button className="bg-green-500 hover:bg-orange-600 px-4 py-1.5 rounded-lg font-medium transition">
                Ctrl+D 收藏本站
              </button>
            </div>
          </div>
        </div>
        </div>
        {/* 内容区域 */}
        <div className="flex-1 overflow-y-auto bg-gray-50 mt-5">
          <div className="max-w-7xl mx-auto p-6">
            {/* 标题 */}
            {activeSubCategory ==='hotTools' ? <div className="text-md font-semibold pb-5 text-red-500  font-bold"><span className="text-2xl">🔥</span> 热门推荐！！</div>:<div className="mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${categories[activeCategory]?.color || 'from-gray-400 to-gray-500'} flex items-center justify-center`}>
                  {categories[activeCategory]?.icon ? 
                    React.createElement(categories[activeCategory].icon, { size: 24, className: 'text-white' })
                    : <Globe size={24} className="text-white" />
                  }
                </div>
                <h2 className="text-2xl font-bold text-gray-800">{activeCategory}</h2>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 flex items-center space-x-3">
                <span className="text-2xl">📁</span>
                <span className="font-semibold text-purple-900">{activeSubCategory}</span>
              </div>
            </div>}

            {/* 搜索结果显示 */}
            {isSearching && (
              <div className="mb-6 bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-800">
                    搜索结果: {searchResults.length} 个工具匹配 "{searchKeyword}"
                  </h3>
                  {isSearching && (
                    <button 
                      className="text-sm text-blue-500 hover:text-blue-700 transition"
                      onClick={() => {
                        setSearchKeyword('');
                        setSearchResults([]);
                        setIsSearching(false);
                        setActiveCategory('AI工具');
                        setActiveSubCategory('AI写作');
                      }}
                    >
                      清除搜索
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* 工具卡片 */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="bg-white rounded-xl border border-gray-200 p-5 animate-pulse">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-gray-200 flex-shrink-0"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="flex space-x-1">
                          <div className="h-4 bg-gray-200 rounded w-16"></div>
                          <div className="h-4 bg-gray-200 rounded w-20"></div>
                        </div>
                      </div>
                    </div>
                    <div className="h-12 bg-gray-200 rounded w-full mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-4 bg-gray-200 rounded w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-20"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : isSearching ? searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {searchResults.map((tool, index) => (
                    <div
                      key={tool.name + index} // 使用名称+索引作为更稳定的key
                      className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all p-5 group"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md overflow-hidden"
                          style={{ backgroundColor: tool.color }}
                        >
                          {tool.icon ? (
                            <img 
                              src={tool.icon} 
                              alt={tool.name} 
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              onError={(e) => {
                                // 图片加载失败时显示名称首字母
                                const target = e.target as HTMLImageElement;
                                const container = target.parentElement;
                                if (container) {
                                  container.innerHTML = tool.name.charAt(0);
                                }
                              }}
                            />
                          ) : (
                            tool.name.charAt(0)
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition mb-1 truncate">
                            {tool.name}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {tool.tags.map((tag, i) => (
                              <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                                {tag.trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {tool.desc}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition"
                        onClick={(e) => {
                            if (tool.link === '#') {
                              e.preventDefault();
                              alert('该工具链接暂时不可用');
                            }
                          }}
                        >
                          <span>直达链接</span>
                          <span className="transition-transform group-hover:translate-x-1">🔗</span>
                        </a>
                      <button 
                        className="text-gray-500 hover:text-blue-600 transition flex items-center space-x-1"
                        onClick={() => {
                          setSelectedTool(tool);
                          setShowModal(true);
                          // 阻止页面滚动
                          document.body.style.overflow = 'hidden';
                        }}
                      >
                        <span>查看详情</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={40} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  未找到相关工具
                </h3>
                <p className="text-gray-500 mb-6">
                  没有找到与 "{searchKeyword}" 相关的工具，请尝试其他关键词
                </p>
                <button 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition"
                  onClick={() => {
                    setSearchKeyword('');
                    setSearchResults([]);
                    setIsSearching(false);
                    setActiveCategory('AI工具');
                    setActiveSubCategory('AI写作');
                  }}
                >
                  返回全部工具
                </button>
              </div>
            ) : currentTools && currentTools.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {currentTools.map((tool, index) => (
                    <div
                      key={tool.name + index} // 使用名称+索引作为更稳定的key
                      className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all p-5 group"
                    >
                      <div className="flex items-start space-x-3 mb-3">
                        <div 
                          className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md overflow-hidden"
                          style={{ backgroundColor: tool.color }}
                        >
                          {tool.icon ? (
                            <img 
                              src={tool.icon} 
                              alt={tool.name} 
                              className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              onError={(e) => {
                                // 图片加载失败时显示名称首字母
                                const target = e.target as HTMLImageElement;
                                const container = target.parentElement;
                                if (container) {
                                  container.innerHTML = tool.name.charAt(0);
                                }
                              }}
                            />
                          ) : (
                            tool.name.charAt(0)
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition mb-1 truncate">
                            {tool.name}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {tool.tags.map((tag, i) => (
                              <span key={i} className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">
                                {tag.trim()}
                              </span>
                            ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {tool.desc}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition"
                        onClick={(e) => {
                            if (tool.link === '#') {
                              e.preventDefault();
                              alert('该工具链接暂时不可用');
                            }
                          }}
                        >
                          <span>直达链接</span>
                          <span className="transition-transform group-hover:translate-x-1">🔗</span>
                        </a>
                      <button 
                        className="text-gray-500 hover:text-blue-600 transition flex items-center space-x-1"
                        onClick={() => {
                          setSelectedTool(tool);
                          setShowModal(true);
                          // 阻止页面滚动
                          document.body.style.overflow = 'hidden';
                        }}
                      >
                        <span>查看详情</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-12 text-center">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench size={40} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {activeSubCategory} - 内容即将上线
                </h3>
                <p className="text-gray-500">
                  该分类下的优质工具正在精心整理中，敬请期待...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
     
  );
}