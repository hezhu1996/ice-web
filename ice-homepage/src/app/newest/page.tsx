"use client";

import Navigation from "../components/navigation";
import { useState, useEffect, useRef } from "react";
import Image from "react-image-enlarger";

const images = [
  "/10.jpg",
  "/11.jpg",
  "/12.jpg",
  "/13.jpg",
  "/14.jpg",
];

function Newest() {
  const [columnCount, setColumnCount] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  // 根据当前columnCount初始化columns
  const [columns, setColumns] = useState<string[][]>(() => {
    const initialColumnCount = 2; // 默认值
    const newColumns: string[][] = Array.from({ length: initialColumnCount }, () => []);
    images.forEach((image, index) => {
      const columnIndex = index % initialColumnCount;
      newColumns[columnIndex].push(image);
    });
    return newColumns;
  });

  // 计算列数的函数
  const calculateColumnCount = (width: number) => {
    if (width >= 1536) return 4; // 2xl: 超大屏幕4列
    if (width >= 1280) return 3; // xl: 大屏幕3列
    if (width >= 768) return 2; // md: 中等屏幕2列
    return 1; // 小屏幕1列
  };

  useEffect(() => {
    const updateColumnCount = () => {
      const width = window.innerWidth;
      const newColumnCount = calculateColumnCount(width);
      
      console.log('Newest page - Window width:', width, 'New column count:', newColumnCount);
      
      setColumnCount(newColumnCount);
    };

    // 立即执行一次
    console.log('Newest component mounted, initial setup');
    updateColumnCount();
    
    // 监听窗口大小变化
    const debouncedResize = () => {
      console.log('Newest page - Resize event triggered');
      updateColumnCount();
    };
    
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      console.log('Newest page - Cleanup resize listener');
      window.removeEventListener('resize', debouncedResize);
    };
  }, []); // 移除依赖项，只在组件挂载时执行

  useEffect(() => {
    // 将图片分配到各列，尽量保持平均分布
    const newColumns: string[][] = Array.from({ length: columnCount }, () => []);
    
    images.forEach((image, index) => {
      const columnIndex = index % columnCount;
      newColumns[columnIndex].push(image);
    });

    setColumns(newColumns);
  }, [columnCount]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center ">
        <div className="w-full xl:max-w-[1280px] z-10">
          <Navigation></Navigation>
        </div>

        <div ref={containerRef} className="mx-auto sm:mt-[50px] max-w-[1500px] p-4">
          {/* JavaScript 动态列布局 */}
          <div className="flex gap-4">
            {columns.map((column, columnIndex) => (
              <div key={`column-${columnCount}-${columnIndex}`} className="flex-1">
                {column.map((image) => (
                  <SingleSource key={image} src={image} />
                ))}
              </div>
            ))}
          </div>
          
          {/* CSS Grid 备选方案 - 如果 JavaScript 不工作可以取消注释 */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {images.map((image) => (
              <SingleSource key={image} src={image} />
            ))}
          </div> */}
        </div>
      </main>
    </>
  );
}

export default Newest;

function SingleSource({ src }: { readonly src: string }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Image
        style={{ width: "100%", height: "auto", maxWidth: "500px" }}
        zoomed={zoomed}
        src={src}
        onClick={() => setZoomed(true)}
        onRequestClose={() => setZoomed(false)}
        // renderLoading={<ReactLoading type={"cylon"} color="black" />}
      />
    </div>
  );
}
