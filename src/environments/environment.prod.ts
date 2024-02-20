export const environment = {
  production: true,
  basePath: `https://${project.prefix?lower_case}-${project.components[0].code}-${project.environment?lower_case}.${project.properties.domain}/`,
};
