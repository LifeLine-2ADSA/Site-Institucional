

  const ctx1 = document.getElementById("myChart1");
  const ctx2 = document.getElementById("myChart2");
  const ctx3 = document.getElementById("myChart3");
  const ctx4 = document.getElementById("myChart4");
  const ctx5 = document.getElementById("myChart5");
  const ctx6 = document.getElementById("myChart6");

  new Chart(ctx1, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "CPU",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx2, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "RAM",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx3, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "REDE",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx4, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "CPU",
          data: [0, 0, 0, 0, 0, 0],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx5, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "RAM",
          data: [0, 0, 0, 0, 0, 0],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  new Chart(ctx6, {
    type: "line",
    data: {
      labels: ["13:00", "13:00", "13:00", "13:00", "13:00", "13:00"],
      datasets: [
        {
          label: "REDE",
          data: [0, 0, 0, 0, 0, 0],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });