# Simple Code Compiler

A web-based code compiler that allows you to write, compile, and execute code in multiple programming languages directly from your browser.

## Features

- **Multi-language Support**: Python, JavaScript, C, C++, and Java
- **Real-time Code Execution**: Write code and see output instantly
- **Clean Interface**: Simple, user-friendly design
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Example Code**: Pre-loaded examples for each programming language
- **Error Handling**: Clear error messages and output display

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **API**: CodeQuotient API for code execution
- **Styling**: Custom CSS with responsive grid layout

## Supported Languages

| Language   | Description                         |
| ---------- | ----------------------------------- |
| Python     | Popular scripting language          |
| JavaScript | Web development language            |
| C          | Low-level programming language      |
| C++        | Object-oriented extension of C      |
| Java       | Cross-platform programming language |

## How to Use

1. **Select Language**: Choose your preferred programming language from the dropdown
2. **Write Code**: Type your code in the editor or use the provided examples
3. **Run Code**: Click the "Run Code" button to execute your program
4. **View Output**: See the results in the output console
5. **Clear Output**: Use "Clear Output" to reset the console

## Live Demo 
<code> https://shorturl.at/IjLow </code>

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/Code_Complier_API.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Code_Complier_API
   ```

3. Open `index.html` in your web browser.

## 💻 Example Usage

### Python Example

```python
print("Hello World")
x = 10
y = 20
print(f"Sum: {x + y}")
```

### JavaScript Example

```javascript
console.log("Hello World");
const numbers = [1, 2, 3, 4, 5];
console.log("Numbers:", numbers);
```

### C Example

```c
#include <stdio.h>

int main() {
    printf("Hello World\n");
    return 0;
}
```

## 🌐 API Integration

This project uses the CodeQuotient API for code execution:

- **Endpoint**: `https://codequotient.com/api/executeCode`
- **Method**: POST
- **Headers**: Content-Type: application/json

### Request Format

```javascript
{
  "code": "your_code_here",
  "langId": "language_id"
}
```


## 🎨 File Structure

```
Code_Complier_API/
├── index.html          # Main HTML file
├── index.css           # Stylesheet
├── index.js            # JavaScript functionality
└── README.md          # Project documentation
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 🐛 Known Issues

- API may occasionally timeout for complex code
- Limited error details for compilation errors
- No syntax highlighting in the editor

## 📧 Contact

If you have any questions or suggestions, feel free to reach out or create an issue in this repository.

---
