import MyRoutes from "./router";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/ui/LoadingScreen";
import { ProjectsProvider, useProjects } from "./context/ProjectsContext";
import { CertificatesProvider, useCertificates } from "./context/CertificatesContext";

function App() {
  return (
    <ProjectsProvider>
      <CertificatesProvider>
        <AppContent />
      </CertificatesProvider>
    </ProjectsProvider>
  );
}

function AppContent() {
  const { isLoading: isLoadingProjects } = useProjects();
  const { isLoading: isLoadingCertificates } = useCertificates();

  const isLoading = isLoadingProjects || isLoadingCertificates;

  return (
    <>
      {isLoading ? <LoadingScreen /> : <MyRoutes />}
    </>
  );
}


export default App;
