// Tailwind 主题配置
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'cyber-dark': '#0a0e17',
                'cyber-blue': '#00d4ff',
                'cyber-purple': '#7b2cbf',
                'cyber-green': '#00ff9d',
                'cyber-panel': 'rgba(15, 23, 42, 0.7)',
            },
            boxShadow: {
                'neon-blue': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(0, 212, 255, 0.1)',
                'neon-green': '0 0 20px rgba(0, 255, 157, 0.3), 0 0 40px rgba(0, 255, 157, 0.1)',
            }
        }
    }
}

// 元素数据
const elementData = {
    'H': { name: '氢', english: 'Hydrogen', number: 1, mass: '1.008', category: '非金属', period: '第1周期 / ⅠA族', electron: '1s¹', density: '0.0899 g/L', year: '1766年' },
    'He': { name: '氦', english: 'Helium', number: 2, mass: '4.003', category: '稀有气体', period: '第1周期 / 0族', electron: '1s²', density: '0.1786 g/L', year: '1868年' },
    'Li': { name: '锂', english: 'Lithium', number: 3, mass: '6.941', category: '碱金属', period: '第2周期 / ⅠA族', electron: '[He] 2s¹', density: '0.534 g/cm³', year: '1817年' },
    'Be': { name: '铍', english: 'Beryllium', number: 4, mass: '9.012', category: '碱土金属', period: '第2周期 / ⅡA族', electron: '[He] 2s²', density: '1.85 g/cm³', year: '1798年' },
    'B': { name: '硼', english: 'Boron', number: 5, mass: '10.81', category: '类金属', period: '第2周期 / ⅢA族', electron: '[He] 2s²2p¹', density: '2.34 g/cm³', year: '1808年' },
    'C': { name: '碳', english: 'Carbon', number: 6, mass: '12.01', category: '非金属', period: '第2周期 / ⅣA族', electron: '[He] 2s²2p²', density: '2.267 g/cm³', year: '古代已知' },
    'N': { name: '氮', english: 'Nitrogen', number: 7, mass: '14.01', category: '非金属', period: '第2周期 / ⅤA族', electron: '[He] 2s²2p³', density: '1.251 g/L', year: '1772年' },
    'O': { name: '氧', english: 'Oxygen', number: 8, mass: '16.00', category: '非金属', period: '第2周期 / ⅥA族', electron: '[He] 2s²2p⁴', density: '1.429 g/L', year: '1774年' },
    'F': { name: '氟', english: 'Fluorine', number: 9, mass: '19.00', category: '卤素', period: '第2周期 / ⅦA族', electron: '[He] 2s²2p⁵', density: '1.696 g/L', year: '1886年' },
    'Ne': { name: '氖', english: 'Neon', number: 10, mass: '20.18', category: '稀有气体', period: '第2周期 / 0族', electron: '[He] 2s²2p⁶', density: '0.9002 g/L', year: '1898年' },
    'Na': { name: '钠', english: 'Sodium', number: 11, mass: '22.99', category: '碱金属', period: '第3周期 / ⅠA族', electron: '[Ne] 3s¹', density: '0.971 g/cm³', year: '1807年' },
    'Mg': { name: '镁', english: 'Magnesium', number: 12, mass: '24.31', category: '碱土金属', period: '第3周期 / ⅡA族', electron: '[Ne] 3s²', density: '1.738 g/cm³', year: '1755年' },
    'Al': { name: '铝', english: 'Aluminum', number: 13, mass: '26.98', category: '主族金属', period: '第3周期 / ⅢA族', electron: '[Ne] 3s²3p¹', density: '2.70 g/cm³', year: '1825年' },
    'Si': { name: '硅', english: 'Silicon', number: 14, mass: '28.09', category: '类金属', period: '第3周期 / ⅣA族', electron: '[Ne] 3s²3p²', density: '2.33 g/cm³', year: '1824年' },
    'P': { name: '磷', english: 'Phosphorus', number: 15, mass: '30.97', category: '非金属', period: '第3周期 / ⅤA族', electron: '[Ne] 3s²3p³', density: '1.82 g/cm³', year: '1669年' },
    'S': { name: '硫', english: 'Sulfur', number: 16, mass: '32.07', category: '非金属', period: '第3周期 / ⅥA族', electron: '[Ne] 3s²3p⁴', density: '2.07 g/cm³', year: '古代已知' },
    'Cl': { name: '氯', english: 'Chlorine', number: 17, mass: '35.45', category: '卤素', period: '第3周期 / ⅦA族', electron: '[Ne] 3s²3p⁵', density: '3.214 g/L', year: '1774年' },
    'Ar': { name: '氩', english: 'Argon', number: 18, mass: '39.95', category: '稀有气体', period: '第3周期 / 0族', electron: '[Ne] 3s²3p⁶', density: '1.784 g/L', year: '1894年' },
    'K': { name: '钾', english: 'Potassium', number: 19, mass: '39.10', category: '碱金属', period: '第4周期 / ⅠA族', electron: '[Ar] 4s¹', density: '0.862 g/cm³', year: '1807年' },
    'Ca': { name: '钙', english: 'Calcium', number: 20, mass: '40.08', category: '碱土金属', period: '第4周期 / ⅡA族', electron: '[Ar] 4s²', density: '1.54 g/cm³', year: '1808年' },
    'Sc': { name: '钪', english: 'Scandium', number: 21, mass: '44.96', category: '过渡金属', period: '第4周期 / ⅢB族', electron: '[Ar] 3d¹4s²', density: '2.99 g/cm³', year: '1879年' },
    'Ti': { name: '钛', english: 'Titanium', number: 22, mass: '47.87', category: '过渡金属', period: '第4周期 / ⅣB族', electron: '[Ar] 3d²4s²', density: '4.51 g/cm³', year: '1791年' },
    'V': { name: '钒', english: 'Vanadium', number: 23, mass: '50.94', category: '过渡金属', period: '第4周期 / ⅤB族', electron: '[Ar] 3d³4s²', density: '6.0 g/cm³', year: '1801年' },
    'Cr': { name: '铬', english: 'Chromium', number: 24, mass: '52.00', category: '过渡金属', period: '第4周期 / ⅥB族', electron: '[Ar] 3d⁵4s¹', density: '7.15 g/cm³', year: '1797年' },
    'Mn': { name: '锰', english: 'Manganese', number: 25, mass: '54.94', category: '过渡金属', period: '第4周期 / ⅦB族', electron: '[Ar] 3d⁵4s²', density: '7.3 g/cm³', year: '1774年' },
    'Fe': { name: '铁', english: 'Iron', number: 26, mass: '55.85', category: '过渡金属', period: '第4周期 / Ⅷ族', electron: '[Ar] 3d⁶4s²', density: '7.87 g/cm³', year: '古代已知' },
    'Co': { name: '钴', english: 'Cobalt', number: 27, mass: '58.93', category: '过渡金属', period: '第4周期 / Ⅷ族', electron: '[Ar] 3d⁷4s²', density: '8.86 g/cm³', year: '1735年' },
    'Ni': { name: '镍', english: 'Nickel', number: 28, mass: '58.69', category: '过渡金属', period: '第4周期 / Ⅷ族', electron: '[Ar] 3d⁸4s²', density: '8.91 g/cm³', year: '1751年' },
    'Cu': { name: '铜', english: 'Copper', number: 29, mass: '63.55', category: '过渡金属', period: '第4周期 / ⅠB族', electron: '[Ar] 3d¹⁰4s¹', density: '8.96 g/cm³', year: '古代已知' },
    'Zn': { name: '锌', english: 'Zinc', number: 30, mass: '65.38', category: '过渡金属', period: '第4周期 / ⅡB族', electron: '[Ar] 3d¹⁰4s²', density: '7.14 g/cm³', year: '古代已知' },
    'Ga': { name: '镓', english: 'Gallium', number: 31, mass: '69.72', category: '主族金属', period: '第4周期 / ⅢA族', electron: '[Ar] 3d¹⁰4s²4p¹', density: '5.91 g/cm³', year: '1875年' },
    'Ge': { name: '锗', english: 'Germanium', number: 32, mass: '72.63', category: '类金属', period: '第4周期 / ⅣA族', electron: '[Ar] 3d¹⁰4s²4p²', density: '5.32 g/cm³', year: '1886年' },
    'As': { name: '砷', english: 'Arsenic', number: 33, mass: '74.92', category: '类金属', period: '第4周期 / ⅤA族', electron: '