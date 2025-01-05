import React from "react";
import * as styles from "./styles.module.css"










export const TaskList = () => {




  return (
    <div className={styles.taskListWrapper}>
      <form className={styles.taskListForm}>
        <input type="text" placeholder="Название таски"></input>
        <div className={styles.taskPriorityBlock}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <button type="button">Добавить</button>
      </form>
      <div className={styles.taskList}>
        <div className={styles.taskExample}>
          <div>Пример задания в списке</div>
          <div>Приоритет</div>
          <div>Статус</div>
        </div>
      </div>
    </div >
  )


}