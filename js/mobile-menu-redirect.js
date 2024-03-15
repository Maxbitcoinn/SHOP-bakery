function scrollToSection(sectionId) {
    // Знаходимо відповідну секцію за її id
    const section = document.getElementById(sectionId);

    // Перевіряємо, чи секція існує
    if (section) {
      // Використовуємо метод scrollIntoView для плавного прокручування до секції
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }