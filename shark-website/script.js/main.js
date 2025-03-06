// scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
    // 예시: 폼 제출 시 알림
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // 기본 폼 제출 동작 방지
      alert('폼이 제출되었습니다!');
    });
  });
  