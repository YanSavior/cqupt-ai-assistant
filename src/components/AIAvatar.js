import React, { useState, useEffect } from 'react';

const AIAvatar = ({ isThinking = false, isReplying = false }) => {
  const [currentState, setCurrentState] = useState('normal');
  const [showAha, setShowAha] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);

  // 监听状态变化
  useEffect(() => {
    if (isThinking) {
      setCurrentState('thinking');
      // 平滑切换到思考状态图片
      setImageOpacity(0);
      setTimeout(() => setImageOpacity(1), 300);
    } else if (isReplying) {
      setCurrentState('aha');
      setShowAha(true);
      // 平滑切换到恍然大悟状态图片
      setImageOpacity(0);
      setTimeout(() => setImageOpacity(1), 300);
      // 3秒后恢复默认状态
      setTimeout(() => {
        setShowAha(false);
        setCurrentState('normal');
        // 平滑切换回默认图片
        setImageOpacity(0);
        setTimeout(() => setImageOpacity(1), 300);
      }, 3000);
    } else {
      setCurrentState('normal');
      // 平滑切换回默认图片
      setImageOpacity(0);
      setTimeout(() => setImageOpacity(1), 300);
    }
  }, [isThinking, isReplying]);

  // 根据状态选择图片
  const getImageSrc = () => {
    if (currentState === 'thinking') {
      return '/Picture1.png';
    } else if (currentState === 'aha') {
      return '/Picture2.png';
    } else {
      return '/Picturee.png';
    }
  };

  return (
    <div style={{ 
      position: 'absolute',
      left: '10px',
      bottom: '10px',
      zIndex: 1000,
      width: '220px', // 缩小容器宽度
      height: '280px', // 缩小容器高度
      pointerEvents: 'none'
    }}>
      {/* 使用PhotoShop抠图的图片 - 支持状态切换 */}
      <div className={`ai-avatar ${currentState}`} style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '220px', // 缩小图片宽度
        height: '240px' // 缩小图片高度
      }}>
        <div 
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${getImageSrc()})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1))',
            opacity: imageOpacity,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      </div>

      {/* 恍然大悟状态特效 */}
      {showAha && (
        <div className="aha-effects" style={{
          position: 'absolute',
          top: '-5px', // 调整位置
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1001
        }}>
          <div className="aha-bubble" style={{
            width: '40px', // 稍微缩小特效尺寸
            height: '40px',
            borderRadius: '50%',
            border: '4px solid #FFD700', // 稍微缩小边框
            opacity: 0.9,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            animation: 'ahaGlow 1.2s ease-out'
          }}>
            <span style={{
              color: '#FFD700',
              fontSize: '24px', // 稍微缩小字体
              fontWeight: 'bold'
            }}>💡</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAvatar; 