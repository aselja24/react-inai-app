import React from 'react'

export default function Counter_blok() {
  return (
        <div className="counters">
          <div className="counter">
            <span className="num" data-target="10000">0</span>
            <p>Студентов</p>
          </div>
          <div className="counter">
            <span className="num" data-target="60">0</span>
            <p>Преподавателей</p>
          </div>
          <div className="counter">
            <span className="num" data-target="4">0</span>
            <p>Направления</p>
          </div>
          <div className="counter">
            <span className="num" data-target="55000">0</span>
            <p>Выпускников</p>
          </div>
        </div>
  )
}
