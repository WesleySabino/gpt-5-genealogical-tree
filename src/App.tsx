import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import Canvas from './components/Canvas';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { load } from './store/treeSlice';
import { exportToJSON, importFromJSON } from './utils/export';

export default function App() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const state = useAppSelector((s) => s.tree.present);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result;
      if (typeof text === 'string') {
        const parsed = importFromJSON(text);
        dispatch(load(parsed));
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div>
      <button onClick={handleExport}>{t('export')}</button>
      <button onClick={handleImportClick}>{t('import')}</button>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <Canvas />
    </div>
  );
}
