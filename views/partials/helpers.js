module.exports = {
    formatDate: (date) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options); // Use built-in date formatting
    },
  };
  