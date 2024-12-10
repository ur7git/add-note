exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body);

    // Simulate saving the data (replace with real database logic)
    console.log("Received data:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Form submitted successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error processing form submission" }),
    };
  }
};
