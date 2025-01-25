import CoachInterface from "@/app/components/CoachInterface/CoachInterface";
import ClientInterface from "@/app/components/ClientInterface/ClientInterface";
import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="main-page">
      <main className="main-content">
        <div className="layout">
          <div className="coach-section">
            <CoachInterface />
          </div>

          <div className="client-section">
            <ClientInterface />
          </div>
        </div>
      </main>
    </div>
  );
}
