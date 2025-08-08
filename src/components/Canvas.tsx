import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { addPerson, addRelationship } from '../store/treeSlice';
import type { RelationshipType } from '../models';

export default function Canvas() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const root = useAppSelector((s) => s.tree.present.persons[0]);

  const addRelative = (type: RelationshipType, invert = false) => {
    const id = crypto.randomUUID();
    dispatch(addPerson({ id, names: [t('newPerson')] }));
    const persons = invert ? [id, root.id] : [root.id, id];
    dispatch(addRelationship({ id: crypto.randomUUID(), type, persons }));
  };

  return (
    <div role="region" aria-label={t('treeCanvas')}>
      <svg width={400} height={200} role="img" aria-label={t('rootPerson')}>
        <rect
          x={150}
          y={60}
          width={100}
          height={40}
          fill="#eee"
          stroke="#000"
        />
        <text x={200} y={85} textAnchor="middle">
          {root.names[0]}
        </text>
      </svg>
      <div>
        <button onClick={() => addRelative('biologicalParentChild', true)}>
          {t('addParent')}
        </button>
        <button onClick={() => addRelative('biologicalParentChild')}>
          {t('addChild')}
        </button>
        <button onClick={() => addRelative('sibling')}>
          {t('addSibling')}
        </button>
        <button onClick={() => addRelative('partner')}>{t('addSpouse')}</button>
      </div>
    </div>
  );
}
