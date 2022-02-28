import { SpinnerCircular } from 'spinners-react';

const LoadingScreen = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 350,
      height: '100%'}}
    >
      <SpinnerCircular
        size={50}
        thickness={100}
        speed={100}
        color="#36ad47"
        secondaryColor="rgba(0, 0, 0, 0.44)"
      />
    </div>
  );
}

export default LoadingScreen;
