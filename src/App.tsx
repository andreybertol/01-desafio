import { useEffect, useState } from 'react';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar onClick={handleClickButton} />

      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}