import React, { useState, useEffect } from 'react';
import './App.css';

  // Matrix Rain Effect Component
const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');
    
    // Function to set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // For mobile devices, use larger font size
      return window.innerWidth < 768 ? 20 : 16; // Larger fontSize overall for slower effect
    };
    
    // Initial setup
    let fontSize = setCanvasDimensions();
    let columns = Math.floor(canvas.width / fontSize);
    
    // Characters to be used in the matrix rain (optimized set)
    const characters = 'πΠℼ01234567890123456789';
    
    // Array to track the y position of each column
    const drops = Array(columns).fill().map(() => Math.random() * -100);
    
    // Control the speed and density
    const isMobile = window.innerWidth < 768;
    const fadeOpacity = 0.02; // Lower opacity for longer trails
    const frameDelay = isMobile ? 180 : 150; // Much slower animation
    
    // Drawing function with performance optimizations
    const draw = () => {
      // Semi-transparent black to create fade effect
      ctx.fillStyle = `rgba(0, 0, 0, ${fadeOpacity})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Set the color and font of matrix characters
      ctx.fillStyle = '#0F0'; // Bright green
      ctx.font = `${fontSize}px monospace`;
      
      // Loop through each column (with optimization for mobile)
      const increment = isMobile ? 3 : 2; // Skip columns for sparser effect
      
      for (let i = 0; i < drops.length; i += increment) {
        // Only draw some characters (make it sparser)
        if (Math.random() > 0.3) {
          // Random character from characters string
          const char = characters[Math.floor(Math.random() * characters.length)];
          
          // Draw the character
          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }
        
        // Move the drop down MUCH slower
        drops[i] += 1; // Reduced speed significantly
        
        // Randomly reset a column if it's reached the bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
      }
    };
    
    // Animation loop with fallback for low-end devices
    let intervalId = setInterval(draw, frameDelay);
    
    // Window resize handler with debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        fontSize = setCanvasDimensions();
        columns = Math.floor(canvas.width / fontSize);
        
        // Adjust drops array for new width
        if (columns > drops.length) {
          for (let i = drops.length; i < columns; i++) {
            drops.push(Math.random() * -100);
          }
        } else {
          drops.length = columns; // Truncate if window got smaller
        }
      }, 200); // Debounce resize events
    };
    
    window.addEventListener('resize', handleResize);
    
    // Handle visibility changes to save battery
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Stop animation when tab is not visible
        if (intervalId) clearInterval(intervalId);
      } else {
        // Resume animation when tab becomes visible
        intervalId = setInterval(draw, frameDelay);
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup
    return () => {
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);
  
  return <canvas id="matrix-canvas" className="matrix-canvas"></canvas>;
};

// Pi Calculation Functions
const leibnizPi = (iterations) => {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    pi += ((i % 2 === 0 ? 1 : -1) / (2 * i + 1));
  }
  return 4 * pi;
};

const monteCarloPi = (points) => {
  let insideCircle = 0;
  for (let i = 0; i < points; i++) {
    const x = Math.random();
    const y = Math.random();
    if (x * x + y * y <= 1) {
      insideCircle++;
    }
  }
  return (insideCircle / points) * 4;
};

const nilakanthaPi = (iterations) => {
  let pi = 3;
  let sign = 1;
  for (let i = 2; i < iterations * 2; i += 2) {
    pi += sign * (4 / (i * (i + 1) * (i + 2)));
    sign *= -1;
  }
  return pi;
};

const arctanPi = (iterations) => {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    pi += (4 * Math.pow(-1, i)) / (2 * i + 1);
  }
  return pi;
};

const chudnovskyPi = (iterations) => {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    let num = Math.pow(-1, i) * factorial(6 * i) * (13591409 + 545140134 * i);
    let denom = factorial(3 * i) * Math.pow(factorial(i), 3) * Math.pow(640320, 3 * i + 3 / 2);
    pi += num / denom;
  }
  return 426880 * Math.sqrt(10005) / pi;
};

const eulerPi = (iterations) => {
  let pi = 0;
  for (let i = 1; i <= iterations; i++) {
    pi += (1 / Math.pow(i, 2));
  }
  return Math.sqrt(6 * pi);
};

const wallisPi = (iterations) => {
  let pi = 1;
  for (let i = 1; i <= iterations; i++) {
    pi *= (4 * i * i) / (4 * i * i - 1);
  }
  return 2 * pi;
};

const vietePi = (iterations) => {
  let pi = 1;
  for (let i = 1; i <= iterations; i++) {
    pi = pi * (Math.sqrt(2 + Math.sqrt(2 + pi)));
  }
  return Math.pow(2, iterations) / pi;
};

const bbpPi = (iterations) => {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    pi += (1 / Math.pow(16, i)) * ((4 / (8 * i + 1)) - (2 / (8 * i + 4)) - (1 / (8 * i + 5)) - (1 / (8 * i + 6)));
  }
  return pi;
};

const ramanujanPi = (iterations) => {
  let pi = 0;
  for (let i = 0; i < iterations; i++) {
    let numerator = factorial(4 * i) * (1103 + 26390 * i);
    let denominator = Math.pow(factorial(i), 4) * Math.pow(396, 4 * i);
    pi += numerator / denominator;
  }
  return 2 * Math.sqrt(2) * pi;
};

// Helper function for factorial calculation
const factorial = (n) => {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
};

const App = () => {
  const [selectedFormula, setSelectedFormula] = useState('leibniz');
  const [iterations, setIterations] = useState(1000);
  const [calculatedPi, setCalculatedPi] = useState(null);
  const [errorMargin, setErrorMargin] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const equationsInfo = {
    leibniz: "Leibniz series for Pi: 4 * (1 - 1/3 + 1/5 - 1/7 + ...)",
    monteCarlo: "Monte Carlo simulation approximates Pi using random points within a circle.",
    nilakantha: "Nilakantha series: Pi = 3 + 4/(2*3*4) - 4/(4*5*6) + ...",
    arctan: "Arctangent method: Pi = 4 * (1 - 1/3 + 1/5 - 1/7 + ...)",
    chudnovsky: "Chudnovsky series is a fast converging series for Pi.",
    euler: "Euler's method uses the sum of reciprocals of squares.",
    wallis: "Wallis product: Pi = 2 * (1 * 2 / 1 * 3) * (2 * 3 / 3 * 4) * ...",
    viete: "Viete's formula: Pi = lim(2, sqrt(2 + sqrt(2 + sqrt(2 + ...))))",
    bbp: "BBP formula for Pi: Pi = sum(1/(16^n) * (4/(8n+1) - 2/(8n+4) - ...))",
    ramanujan: "Ramanujan series is based on powerful approximations for Pi."
  };

  const calculatePi = () => {
    if (selectedFormula === 'monteCarlo' && iterations > 100000000) {
      alert("Maximum points for Monte Carlo is 10^8");
      return;
    }

    setIsLoading(true);
    
    // Use setTimeout to allow the loading indicator to render before calculation
    setTimeout(() => {
      let piValue;

      switch (selectedFormula) {
        case 'leibniz':
          piValue = leibnizPi(iterations);
          break;
        case 'monteCarlo':
          piValue = monteCarloPi(iterations);
          break;
        case 'nilakantha':
          piValue = nilakanthaPi(iterations);
          break;
        case 'arctan':
          piValue = arctanPi(iterations);
          break;
        case 'chudnovsky':
          piValue = chudnovskyPi(iterations);
          break;
        case 'euler':
          piValue = eulerPi(iterations);
          break;
        case 'wallis':
          piValue = wallisPi(iterations);
          break;
        case 'viete':
          piValue = vietePi(iterations);
          break;
        case 'bbp':
          piValue = bbpPi(iterations);
          break;
        case 'ramanujan':
          piValue = ramanujanPi(iterations);
          break;
        default:
          piValue = 0;
      }

      setCalculatedPi(piValue);
      setErrorMargin(Math.abs(Math.PI - piValue).toFixed(8));
      setIsLoading(false);
    }, 10);
  };

  // Handle scroll to results when they appear
  useEffect(() => {
    if (calculatedPi && !isLoading) {
      // Get the results card element
      const resultCard = document.querySelector('.result-card');
      if (resultCard) {
        // Smooth scroll to results on mobile
        if (window.innerWidth < 768) {
          resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  }, [calculatedPi, isLoading]);

  return (
    <div className="app-wrapper">
      <MatrixRain />
      
      <div className="app-container">
        <div className="app-card">
          <h1 className="app-title">π Calculator</h1>

          <div className="card">
            <div className="selector">
              <label htmlFor="formula-select">Select Pi Formula:</label>
              <select
                id="formula-select"
                className="dropdown"
                value={selectedFormula}
                onChange={(e) => setSelectedFormula(e.target.value)}
              >
                <option value="leibniz">Leibniz Series</option>
                <option value="monteCarlo">Monte Carlo Simulation</option>
                <option value="nilakantha">Nilakantha Series</option>
                <option value="arctan">Arctan Method</option>
                <option value="chudnovsky">Chudnovsky Series</option>
                <option value="euler">Euler's Method</option>
                <option value="wallis">Wallis Product</option>
                <option value="viete">Viete's Formula</option>
                <option value="bbp">BBP Formula</option>
                <option value="ramanujan">Ramanujan Series</option>
              </select>
            </div>

            <div className="iterations-input">
              <label htmlFor="iterations-input">Enter number of iterations/points:</label>
              <input
                id="iterations-input"
                type="number"
                inputMode="numeric"
                pattern="[0-9]*"
                className="input-field"
                value={iterations}
                onChange={(e) => setIterations(Number(e.target.value))}
                placeholder="Number of iterations"
                max={selectedFormula === 'monteCarlo' ? 100000000 : 1000000}
              />
            </div>

            <button 
              className="calculate-button" 
              onClick={calculatePi}
              disabled={isLoading}
            >
              {isLoading ? 'Calculating...' : 'Calculate Pi'}
            </button>
          </div>

          {calculatedPi && !isLoading && (
            <div className="result-card">
              <div className="result-content">
                <h2 className="result-title">Calculated π:</h2>
                <div className="pi-value">{calculatedPi}</div>
                <p className="error-margin">Error Margin: {errorMargin}</p>
                <p className="actual-pi">Actual π: {Math.PI}</p>
              </div>
            </div>
          )}
        </div>

        {isLoading && (
          <div className="loader">
            <div className="loading-spinner">
              <div className="spinner-sector spinner-sector-1"></div>
              <div className="spinner-sector spinner-sector-2"></div>
              <div className="spinner-sector spinner-sector-3"></div>
            </div>
          </div>
        )}

        <button 
          className="info-button" 
          onClick={() => setShowInfo(!showInfo)}
          aria-label="Formula Information"
        >
          <span className="info-icon">i</span>
        </button>

        {showInfo && (
          <div className="info-box">
            <div className="info-header">
              <h3>Formula Information</h3>
              <button 
                className="close-button" 
                onClick={() => setShowInfo(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>
            <p className="info-text">{equationsInfo[selectedFormula]}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;