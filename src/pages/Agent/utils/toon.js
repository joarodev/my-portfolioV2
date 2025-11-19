// Escapa comillas para que el TOON/YAML no se rompa
const escape = (value) => {
  if (typeof value !== "string") return value;
  return value.replace(/"/g, '\\"').replace(/\n/g, " ");
};

// Función recursiva para serializar cualquier objeto YAML
const serializeObject = (obj, indent = 2) => {
  let output = "";

  const pad = " ".repeat(indent);

  Object.entries(obj).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      output += `${pad}${key}:\n`;
      value.forEach((item) => {
        if (typeof item === "string") {
          output += `${pad}  - "${escape(item)}"\n`;
        } else if (typeof item === "object" && item !== null) {
          output += `${pad}  -\n`;
          output += serializeObject(item, indent + 4);
        }
      });
    }
    else if (typeof value === "object" && value !== null) {
      output += `${pad}${key}:\n`;
      output += serializeObject(value, indent + 2);
    }
    else {
      output += `${pad}${key}: "${escape(value)}"\n`;
    }
  });

  return output;
};

// convert JSON => TOON recursively
function JSONtoTOON(obj, indent = 0) {
  let str = "";
  const space = " ".repeat(indent);

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === "string") {
      str += `${space}${key}: "${value}"\n`;
    } else if (Array.isArray(value)) {
      str += `${space}${key}:\n`;
      value.forEach(item => {
        if (typeof item === "string") {
          str += `${space}  - "${item}"\n`;
        } else {
          str += `${space}  -\n${JSONtoTOON(item, indent + 4)}`;
        }
      });
    } else if (typeof value === "object") {
      str += `${space}${key}:\n${JSONtoTOON(value, indent + 2)}`;
    }
  }

  return str;
}

// CONVERT TO TOON PRINCIPAL
export const convertToTOON = (projects, certificates, i18n) => {
  let toonString = "version: 1.0\n";

  // Projects
  toonString += "projects:\n";
  projects.forEach(p => {
    toonString += `  - name: "${p.title}"\n`;
    toonString += `    description: "${p.description}"\n`;
    toonString += `    github: "${p.github}"\n`;
    toonString += `    technologies: "${p.technologies}"\n`;
  });

  // Certificates
  toonString += "certificates:\n";
  certificates.forEach(c => {
    toonString += `  - name: "${c.name}"\n`;
    toonString += `    url: "${c.url}"\n`;
  });

  // i18n
  toonString += "i18n:\n";
  toonString += JSONtoTOON(i18n, 2);

  return toonString;
};
