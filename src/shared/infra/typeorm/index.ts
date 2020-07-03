import { createConnections } from 'typeorm';

/**
 * Used for multiple connections
 * EX: postgres and mongo
 */
createConnections();

/**
 * Used for ony one connection
 */

// createConnection();
