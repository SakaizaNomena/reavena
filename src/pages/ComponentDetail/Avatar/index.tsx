import PageContainer from "../../../components/PageContainer";
import Section from "../../../components/Section";
import Tabs from "../../../components/Tabs";
import Title from "../../../components/Title";

const Avatar = () => {
  return (
    <PageContainer>
      <Title 
        title="Avatar" 
        size="large"
      />
      <Section
        title="Installation"
        withBorder
      >
        Afficher une image de profil ou une icône représentant un utilisateur. L'avatar peut être utilisé pour identifier visuellement un utilisateur dans une interface, que ce soit dans une liste d'utilisateurs, un profil ou une section de commentaires. Les avatars peuvent être personnalisés avec différentes formes, tailles et styles pour s'adapter à l'esthétique de l'application.
      </Section>
      <Tabs />
    </PageContainer>
  );
}

export default Avatar;