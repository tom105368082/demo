const demo = (cb) => {
  const error = null;
  const text = 'Service is Ok!';

  return cb(error, text);
}

module.exports.demo = demo;
