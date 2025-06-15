import React, { useState } from 'react';
import styles from './QuizGame.module.css';
import Button from '../Button/Button';

const questions = [
  { question: 'Vỏ chai nhựa, lon nhôm, hộp giấy thuộc loại rác nào?', answers: ['Rác hữu cơ', 'Rác tái chế', 'Rác còn lại'], correct: 'Rác tái chế' },
  { question: 'Hành động nào sau đây giúp tiết kiệm điện hiệu quả nhất?', answers: ['Tắt đèn khi ra khỏi phòng', 'Mở tủ lạnh liên tục', 'Dùng máy sấy ở mức cao nhất'], correct: 'Tắt đèn khi ra khỏi phòng' },
  { question: 'Màu xanh lá cây thường được dùng cho thùng rác chứa loại nào?', answers: ['Rác tái chế', 'Rác nguy hại', 'Rác hữu cơ'], correct: 'Rác hữu cơ' },
  { question: 'Ngày Trái Đất được tổ chức vào ngày nào hàng năm?', answers: ['5 tháng 6', '22 tháng 4', '20 tháng 3'], correct: '22 tháng 4' },
  { question: 'Pin đã qua sử dụng nên được xử lý như thế nào?', answers: ['Vứt vào thùng rác chung', 'Chôn xuống đất', 'Thu gom tại điểm riêng'], correct: 'Thu gom tại điểm riêng' },
  { question: 'Trong mô hình 3R, chữ "R" đầu tiên (Reduce) có nghĩa là gì?', answers: ['Tái sử dụng', 'Tái chế', 'Tiết giảm'], correct: 'Tiết giảm' },
  { question: 'Việc sử dụng túi vải đi chợ thay cho túi nilon là thực hành theo nguyên tắc nào?', answers: ['Reduce (Tiết giảm)', 'Reuse (Tái sử dụng)', 'Recycle (Tái chế)'], correct: 'Reuse (Tái sử dụng)' },
  { question: 'Hiệu ứng nhà kính chủ yếu do sự gia tăng của khí nào sau đây?', answers: ['Oxy (O2)', 'Nitơ (N2)', 'Carbon Dioxide (CO2)'], correct: 'Carbon Dioxide (CO2)' },
  { question: 'Đâu là một nguồn năng lượng tái tạo?', answers: ['Than đá', 'Dầu mỏ', 'Năng lượng mặt trời'], correct: 'Năng lượng mặt trời' },
  { question: 'Mục tiêu chính của việc phân loại rác tại nguồn là gì?', answers: ['Để thùng rác trông đẹp hơn', 'Tăng hiệu quả tái chế và giảm gánh nặng cho môi trường', 'Làm cho việc thu gom rác dễ dàng hơn'], correct: 'Tăng hiệu quả tái chế và giảm gánh nặng cho môi trường' },
];

const QuizGame = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const handleAnswer = (answer) => {
        if (answer === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    };
    const restartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
    }
    return (
        <div className={styles.quizGame}>
            {showResult ? (
                <div className={styles.result}>
                    <h2>Chúc mừng bạn đã hoàn thành!</h2>
                    <p>Điểm số của bạn là <span className={styles.score}>{score} / {questions.length}</span></p>
                    <Button onClick={restartGame}>Chơi lại</Button>
                </div>
            ) : (
                <>
                    <p className={styles.progress}>Câu hỏi {currentQuestion + 1}/{questions.length}</p>
                    <h3 className={styles.question}>{questions[currentQuestion].question}</h3>
                    <div className={styles.answers}>
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={() => handleAnswer(answer)} className={styles.answerButton}>{answer}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

export default QuizGame;