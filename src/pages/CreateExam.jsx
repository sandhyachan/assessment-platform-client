import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CreateExam.css';
import NavBarPrivate from "../components/NavbarPriv";

export default function CreateExamPage() {

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

              className="form-control"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="examDescription">Exam Description</label>
            <textarea
              id="examDescription"
              name="examDescription"

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
          <button type="button" className="btn btn-primary" >
            Add Another Question
          </button>

          {/* Create and Cancel Buttons */}
          <div className="form-group">
            <button type="submit" className="btn btn-warning btn-lg w-100" disabled={loading}>
              {loading ? 'Creating...' : 'Create Exam'}
            </button>
            <button type="button" className="btn btn-secondary btn-lg w-100" >
              Cancel
            </button>
          </div>
        </form>

        {error && <div className="error-message">{error}</div>} {/* Display errors */}
      </div>
    </div>
  )
}
