hljs.registerLanguage('erb', function(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT('<%#', '%>'),
      {
        className: 'template-tag',
        begin: '<%=?',
        end: '%>',
        subLanguage: 'ruby'
      }
    ]
  };
});

// Aplicar destaque quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => hljs.highlightAll());
