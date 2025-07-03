class MockResend {
  constructor() {}
  emails = {
    send: jest.fn().mockResolvedValue({ id: 'mock', success: true }),
  };
}

module.exports = { Resend: MockResend };
