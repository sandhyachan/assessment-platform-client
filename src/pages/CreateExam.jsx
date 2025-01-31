import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateExam.css';
import NavBarPrivate from "../components/NavbarPriv";

export default function CreateExamPage() {
  const [examTitle, setExamTitle] = useState('')
  const [examDescription, setExamDescription] = useState('')
  const [questions, setQuestions] = useState([{
    questionType: 'multiple-choice',
    questionText: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    topic: '',
    difficulty: 'easy'
  }])

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const questionTypes = ['multiple-choice', 'true-false', 'short-answer']
  const difficulties = ['easy', 'medium', 'hard']

  // Add new question
  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionType: 'multiple-choice',
        questionText: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        topic: '',
        difficulty: 'easy'
      }
    ])
  }

  // Handle input change
  const handleInputChange = (index, e) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index][e.target.name] = e.target.value
    setQuestions(updatedQuestions)
  }

  // Handle adding/removing options for multiple choice
  const handleOptionChange = (index, optionIndex, e) => {
    const updatedQuestions = [...questions]
    updatedQuestions[index].options[optionIndex] = e.target.value
    setQuestions(updatedQuestions)
  }

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const examData = {
      exam_title: examTitle,
      exam_description: examDescription,
      questions
    }
    
    console.log('Exam data:', examData)

    try {
      const result = await fetch('http://localhost:3000/create-exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON'
        },
        body: JSON.stringify(examData)
      })
  
      if(!result.ok){
        const errorData = await result.json()
        setError(errorData.message || 'Failed to create exam. Please try again.')
      } else {
        setTimeout(() => {
          navigate('/teacher-dashboard')
        }, 500)  
      }

    } catch (error) {
      setError('An error occurred. Please try again later.')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // Handle canceling the exam creation
  const handleCancel = () => {
    navigate('/teacher-dashboard')
  }

  return (
    <div className="create-exam-container">
      <NavBarPrivate />

      <div className="create-exam-main">
        <h2>Create New Exam</h2>

        <form onSubmit={handleSubmit} className="create-exam-form">
          {/* Exam Title and Description */}
          <div className="form-group">
            <label htmlFor="examTitle">Exam Title</label>
            <input
              type="text"
              id="examTitle"
              name="examTitle"
              value={examTitle}
              onChange={(e) => setExamTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="examDescription">Exam Description</label>
            <textarea
              id="examDescription"
              name="examDescription"
              value={examDescription}
              onChange={(e) => setExamDescription(e.target.value)}
              className="form-control"
              required
            />
          </div>

          {/* Questions Section */}
          <div className="questions-section">
            {questions.map((question, index) => (
              <div key={index} className="question-container">
                {/* Question Text */}
                <div className="form-group">
                  <label htmlFor={`questionText-${index}`}>Question {index + 1}</label>
                  <input
                    type="text"
                    id={`questionText-${index}`}
                    name="questionText"
                    value={question.questionText}
                    onChange={(e) => handleInputChange(index, e)}
                    className="form-control"
                    placeholder="Enter question text"
                    required
                  />
                </div>

                {/* Question Type */}
                <div className="form-group">
                  <label htmlFor={`questionType-${index}`}>Question Type</label>
                  <select
                    id={`questionType-${index}`}
                    name="questionType"
                    value={question.questionType}
                    onChange={(e) => handleInputChange(index, e)}
                    className="form-control"
                    required
                  >
                    {questionTypes.map((type, idx) => (
                      <option key={idx} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Topic Selection */}
                <div className="form-group">
                  <label htmlFor={`topic-${index}`}>Topic</label>
                  <input
                    type="text"
                    id={`topic-${index}`}
                    name="topic"
                    value={question.topic}
                    onChange={(e) => handleInputChange(index, e)}
                    className="form-control"
                    placeholder="Enter topic name"
                    required
                  />
                </div>

                {/* Difficulty Level */}
                <div className="form-group">
                  <label htmlFor={`difficulty-${index}`}>Difficulty</label>
                  <select
                    id={`difficulty-${index}`}
                    name="difficulty"
                    value={question.difficulty}
                    onChange={(e) => handleInputChange(index, e)}
                    className="form-control"
                    required
                  >
                    {difficulties.map((difficulty, idx) => (
                      <option key={idx} value={difficulty}>
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Fields for Different Question Types */}
                {question.questionType === 'multiple-choice' && (
                  <div className="form-group">
                    <label>Options</label>
                    {question.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="option-container">
                        <input
                          type="text"
                          name={`option-${optionIndex}`}
                          value={option}
                          onChange={(e) => handleOptionChange(index, optionIndex, e)}
                          className="form-control"
                          placeholder={`Option ${optionIndex + 1}`}
                          required
                        />
                      </div>
                    ))}
                    <div className="form-group">
                      <label htmlFor={`correctAnswer-${index}`}>Correct Answer</label>
                      <select
                        id={`correctAnswer-${index}`}
                        name="correctAnswer"
                        value={question.correctAnswer}
                        onChange={(e) => handleInputChange(index, e)}
                        className="form-control"
                        required
                      >
                        {question.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {question.questionType === 'true-false' && (
                  <div className="form-group">
                    <label htmlFor={`correctAnswer-${index}`}>Correct Answer</label>
                    <select
                      id={`correctAnswer-${index}`}
                      name="correctAnswer"
                      value={question.correctAnswer}
                      onChange={(e) => handleInputChange(index, e)}
                      className="form-control"
                      required
                    >
                      <option value="true">True</option>
                      <option value="false">False</option>
                    </select>
                  </div>
                )}

                {question.questionType === 'short-answer' && (
                  <div className="form-group">
                    <label>Short Answer Question</label>
                    <input
                      type="text"
                      disabled
                      value="Teacher to grade manually"
                      className="form-control"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Add Question Button */}
          <button type="button" className="btn btn-primary" onClick={handleAddQuestion}>
            Add Another Question
          </button>

          {/* Create and Cancel Buttons */}
          <div className="form-group">
            <button type="submit" className="btn btn-warning btn-lg w-100" disabled={loading}>
              {loading ? 'Creating...' : 'Create Exam'}
            </button>
            <button type="button" className="btn btn-secondary btn-lg w-100" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </form>

        {error && <div className="error-message">{error}</div>} {/* Display errors */}
      </div>
    </div>
  )
}
