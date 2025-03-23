import { useState, useEffect, useRef } from 'react';
import "./jatek.scss";
import szorny from "./szorny.png";
import like from "./like.png";

const Jatek = () => {
  const [next, setNext] = useState(false);
  const [hp, setHp] = useState(20);
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [direction, setDirection] = useState({ dx: 1, dy: 1 });

  const targetRef = useRef<HTMLDivElement>(null);
  const monsterRef = useRef<HTMLImageElement>(null);

  const handleShot = () => {
    const target = targetRef.current?.getBoundingClientRect();
    const monster = monsterRef.current?.getBoundingClientRect();
    if (target && monster &&
      target.left >= monster.left &&
      target.right <= monster.right &&
      target.top >= monster.top &&
      target.bottom <= monster.bottom
    ) {
      if (hp === 1) {
        setNext(true);
      } else {
        setHp(hp - 1);
      }
    }
  };

  const reset = () => {
    setNext(false);
    setHp(20);
  };

  useEffect(() => {
    const move = () => {
      setPosition((pos) => {
        const newX = pos.x + direction.dx * 2;
        const newY = pos.y + direction.dy * 2;
        const maxX = 100;
        const maxY = 100;
        let dx = direction.dx;
        let dy = direction.dy;
        if (newX <= 0 || newX >= maxX) dx *= -1;
        if (newY <= 0 || newY >= maxY) dy *= -1;
        setDirection({ dx, dy });
        return { x: newX < 0 ? 0 : newX > maxX ? maxX : newX, y: newY < 0 ? 0 : newY > maxY ? maxY : newY };
      });
    };
    const interval = setInterval(move, 20);
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className='jatek'>
      {!next ? (
        <div className='full'>
          <div
            ref={targetRef}
            className='target'
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
          >
            dvd
          </div>
          <img ref={monsterRef} className='szorny' src={szorny} alt='szörny' />
          <h1 className='red'>Randi ellenes szörny</h1>
          <h1 className='red'>{hp} életerő</h1>
          <button className='shot-button' onClick={handleShot}>Lövés</button>
        </div>
      ) : (
        <div className='full'>
          <h1>Szörny legyőzve</h1>
          <h1>mehet a randi!</h1>
          <img className='like' src={like} alt='like' />
          <button className='shot-button' onClick={reset}>Új játék</button>
        </div>
      )}
    </div>
  );
};

export default Jatek;
