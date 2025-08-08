import { useTranslation } from 'react-i18next';
import Canvas from './components/Canvas';
import { useAppSelector } from './store/hooks';
import { exportToJSON } from './utils/export';

export default function App() {
  const { t } = useTranslation();
  const state = useAppSelector((s) => s.tree.present);

  const handleExport = () => {
    const data = exportToJSON(state);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tree.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button onClick={handleExport}>{t('export')}</button>
      <Canvas />
    </div>
  );
}
