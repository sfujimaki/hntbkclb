// シンプルなページ読み込みアニメーション
document.addEventListener('DOMContentLoaded', function() {
    // 基本的なフェードイン効果
    const fadeInElements = document.querySelectorAll('.hero-content, .main-title');
    
    fadeInElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}); 