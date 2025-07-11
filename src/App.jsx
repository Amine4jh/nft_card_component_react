import Card from './Card'
import './styles.css'

function App() {
  return (
    <Card 
      nftImage = "assets/images/image-equilibrium.jpg"
      title = "Equilibrium #3429"
      description = "Our Equilibrium collection promotes balance and calm."
      ethImage = "assets/images/icon-ethereum.svg"
      value = {0.041}
      timeImage = "assets/images/icon-clock.svg"
      time = {3}
      profileImage = "assets/images/image-avatar.png"
      name = "Jules Wyvern"
    />
  )
}

export default App
