# Pi Calculator
A modern React application that calculates π (pi) using various mathematical methods, all wrapped in an engaging Matrix-inspired interface.

## 🔢 Features

- **Multiple Calculation Methods**: Choose from 10 different mathematical approaches to calculate π:
  - Leibniz Series
  - Monte Carlo Simulation
  - Nilakantha Series
  - Arctan Method
  - Chudnovsky Series
  - Euler's Method
  - Wallis Product
  - Viete's Formula
  - BBP Formula
  - Ramanujan Series

- **Visual Feedback**: See the calculated value, error margin, and comparison to the actual value of π


## 🚀 Live Demo

Check out the live demo: [Pi Calculator](https://sudhanshumukherjeexx.github.io/pical/)

## 🧮 How It Works

The Pi Calculator uses various mathematical formulas and algorithms to compute the value of π to varying degrees of precision. The calculation methods range from simple series (like Leibniz) to more complex approaches (like Chudnovsky).

Each method converges to π at different rates:
- Some methods (like Monte Carlo) are intuitive but converge slowly
- Others (like Chudnovsky) are more complex but converge rapidly

The application lets you specify how many iterations or points to use in the calculation, allowing you to experiment with the trade-off between computation time and precision.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5 Canvas (for the Matrix effect)
- CSS3 with modern features

## 📋 Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/sudhanshumukherjeexx/pical.git
   ```

2. Navigate to the project directory:
   ```bash
   cd pi-calculator
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser to:
   ```
   http://localhost:3000
   ```

## 🔍 Usage

1. **Select a Formula**: Choose your preferred mathematical method from the dropdown
2. **Enter Iterations**: Specify how many iterations or points to use in the calculation
3. **Calculate**: Click the "Calculate Pi" button to run the calculation
4. **View Results**: See your calculated π value and its error margin
5. **Formula Info**: Click the info button to learn about each formula

## ⚙️ Customizing the Matrix Effect

The Matrix rain effect can be customized by modifying the `MatrixRain` component in `App.js`:

- **Speed**: Adjust the `frameDelay` variable (higher values = slower animation)
- **Density**: Modify the `fontSize` and `increment` values
- **Fall Rate**: Change the speed by modifying the drops increment value
- **Colors**: Update the `ctx.fillStyle` to change the character color

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Made with ❤️ and mathematics