import React, { useEffect } from "react";
import Modal from "react-modal";
import "./experiencemodal.css";

Modal.setAppElement("#root");
export default function ExperienceModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Experience Modal"
      className="experience-modal"
      shouldCloseOnOverlayClick={false}
    >
      <div className="modal-container">
        <h2>My Past Experience</h2>
        <p>• Worked as a software developer in two projects in an Innovative startup section
        known as Hyper Blue within IBM.</p>
        <p>• Pathway Signal Management: An IBM incubator dedicated to help healthcare organizations improve and simplify the collection, organization, and visualization of their
        healthcare data to help reduce unwarranted variation in care delivery. In this project
        my main job role was front end Development using JavaScript, React JS and UI Testing (puppeteer, Jest). Here I implemented all the testing required for the UI using
        Puppeteer Library to test out the UI Components and ensure functionalities. I have
        also gained exposure in using IBM cloud for this project.</p>
        <p>• Conveyor Al: Is IBM's multi-model productivity tool, that covers code generation,
        test generation, and document generation, powered by IBM hosted LLM's, here I got
        exposure to Typescript Terra-form (ec2, AWS s3) and Open-shift (CLI and Console),
        took part in implementing error-handling and improving robustness of the system.</p>
        <p>• Familiar with using tools like Jenkins, Docker, GIT, JIRA.
        • Familiar with technologies like Redux, Bootstrap, Tailwind CSS, Kubernetes, Containerization.</p>
        <button className="btn" onClick={onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
}
