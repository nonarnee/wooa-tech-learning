import React, {useState} from 'react';

// 원래 파일로 쪼개는데 강의 때문에 한 파일로 만들었다
const SessionItem = ({ title }) => (
  <li>{title}</li>
);

export default function MyApp({ list }) {
  const [displayOrder, setDisplayOrder] = useState('ASC');
  const orderedSessionList = list.map((session, i) => ({
    ...session,
    order: i
  }));
  const toggleDisplayOrder = () => {
    setDisplayOrder(displayOrder === 'ASC' ? 'DESC' : 'ASC');
  }

  return (
    <div>
      <header>
        <h1>React and Typescript</h1>
      </header>
      <button onClick={toggleDisplayOrder}>재정렬</button>
      <ul>
        {/* JSX가 많아지면 readability가 떨어진다고 생각한다 */}
        {/* 쪼개도 코드가 훤히 보일때가 쪼갤 타이밍이라고 생각한다 */}
        { list.map(item => <SessionItem title={item.title} />) }
      </ul>
    </div>
  );
}