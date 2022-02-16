export function contentColor(content) {
  const lowerContent = content.toLowerCase();
  switch(lowerContent) {
    case 'javascript':
      return '#ffca28';
    case 'react':
      return '#53c1de';
    case 'redux':
      return '#7046b2';
    case 'html':
      return '#f16529';
    case 'css':
      return '#1172b8';
    case 'sass':
      return '#cf649a';
    default:   
      return '#eeeeee';
  }
}