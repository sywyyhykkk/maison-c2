# 拾光 Maison · C2 法式中古居所

依据 C2 四室两厅两卫户型图制作的 Three.js 交互装修概念方案。奶油白、胡桃木、人字拼木地板与橄榄绿构成主色，结合细框护墙线、亚麻和黄铜细节。

**在线体验：[m4n9o.com/lab/home](https://m4n9o.com/lab/home)**

## 本地运行

使用 Node.js 24 LTS 和 npm：

```sh
git clone https://github.com/sywyyhykkk/maison-c2.git
cd maison-c2
npm ci
npm run build
npm start
```

打开 <http://127.0.0.1:4173>。如端口已占用，可用 `PORT=4175 npm start` 指定端口。

修改源码后重新执行 `npm run build`，刷新页面即可。构建时先把两张本地 JPG 材质转换为内嵌数据，再由 esbuild 打包 Three.js 和应用代码；运行时不依赖外部 CDN。浏览器需要支持 WebGL 2。

## 交互

- **鸟瞰**：左键拖动旋转，滚轮缩放，右键拖动平移。
- **平面**：俯视核对空间布置，拖动平移，滚轮缩放。
- **漫游**：选择房间进入对应视角，拖动环顾；WASD、方向键或屏幕方向按钮移动，Esc 返回鸟瞰。墙体和户型边缘参与碰撞，家具为展示模型。
- 调整墙体剖切高度、切换日间与暖灯、显示空间名称、保存当前视角。
- 查看设计说明；本地提供原图后可查看原始户型。

## 文件结构

```text
assets/                    两张 CC0 材质
licenses/                  Three.js 第三方许可
scripts/embed-textures.mjs  从原始 JPG 生成内嵌材质模块
src/
  architecture.js          户型尺寸、建筑和房间数据
  furniture.js             原创程序化家具
  main.js                  场景、相机、照明与交互
  materials.js             材质定义
index.html                 页面结构与说明弹窗
style.css                  页面样式
server.mjs                 本地预览服务
SOURCES.json               素材来源、作者与许可记录
设计说明.txt               各空间设计说明
```

`app.js` 和 `src/textures.js` 为构建产物，不提交到 Git。依赖、缓存、环境文件、日志、预览导出和 ZIP 交付包也由 `.gitignore` 排除。保留 `package-lock.json` 以固定依赖版本。

用户提供的原始户型图片不包含在公开仓库中。如需在本地显示，可将图片放到 `assets/original-plan.jpg` 后重新构建；此文件已被 Git 忽略。没有原图时自动隐藏原图入口，三维模型正常运行。构建会将本地原图（如果存在）内嵌到 `app.js`，请按实际发布范围选择是否提供该文件。

## 静态部署

执行 `npm ci && npm run build` 后，将 `index.html`、`style.css`、`app.js`、`assets/`、`SOURCES.json` 和 `licenses/` 一起放到静态站点目录，保留相对路径即可。

现有线上页面由独立的 [m4n9o 仓库](https://github.com/sywyyhykkk/m4n9o) 托管，本仓库保存可重建的查看器源码。更新此仓库不会自动替换线上页面。

## 建模依据与素材

原图标注上部总宽 9.0 m、总进深 14.8 m、下部总宽 7.2 m、阳台进深 1.5 m。128 m² 为建筑面积；层高暂定 2.8 m、墙厚约 0.16 m，未标注尺寸按图面比例推定。原图没有指北针，模型方向按图片理解。此方案用于空间与风格讨论，施工尺寸需现场复核。

保留四房、双卫、U 形厨房、三个飘窗和长阳台；上方中间卧室布置为书房兼客房。详细方案见 [设计说明.txt](设计说明.txt)。

两张实际使用的材质来自 Poly Haven：[人字拼木地板](https://polyhaven.com/a/herringbone_parquet)、[石材](https://polyhaven.com/a/marble_01)，采用 [CC0](https://polyhaven.com/license)。家具和建筑使用本项目程序化几何，品牌链接仅作设计参考，未使用品牌模型。作者、下载来源与许可见 [SOURCES.json](SOURCES.json)，Three.js 的 MIT 许可见 [licenses/THREE-LICENSE.txt](licenses/THREE-LICENSE.txt)。
