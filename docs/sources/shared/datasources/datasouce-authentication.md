---
headless: true
labels:
  products:
    - enterprise
    - oss
---

[//]: # 'This file documents the Authentication section for data sources.'
[//]: # 'This shared file is included in these locations:'
[//]: # '/grafana/docs/sources/datasources/pyroscope/configure-pyroscope-data-source.md'
[//]: # '/grafana/docs/sources/datasources/tempo/configure-tempo-data-source.md'
[//]: # 'If you make changes to this file, verify that the meaning and content are not changed in any place where the file is included.'
[//]: # 'Any links should be fully qualified and not relative: /docs/grafana/ instead of ../grafana/.'

<!-- Authentication procedure from shared file -->

To set up authentication:

1. Select an authentication method from the drop-down list:
   - **Basic authentication**: Authenticates your data source using a username and password
   - **Forward OAuth identity**: Forwards the OAuth access token and the OIDC ID token, if available, of the user querying to the data source
   - **No authentication**: No authentication is required to access the data source

1. For **Basic authentication** only: Enter the **User** and **Password**.
1. Optional: Complete the **TLS settings** for additional security methods.

   **TLS Client Authentication**
   : Toggle on to use client authentication. When enabled, it adds the **Server name**, **Client cert**, and **Client key** fields. The client provides a certificate that is validated by the server to establish the client's trusted identity. The client key encrypts the data between client and server. These details are encrypted and stored in the Grafana database.

   **Add self-signed certificate**
   : Activate this option to use a self-signed TLS certificate. You can add your own Certificate Authority (CA) certificate on top of one generated by the certificate authorities for additional security measure.

   **Skip TLS certification validation**
   : When activated, it bypasses TLS certificate verification. Not recommended, unless absolutely necessary for testing.
   ![Authentication section showing the TLS client certificate options](/media/docs/grafana/data-sources/tempo/tempo-data-source-authentication.png)

1. Optional: Add **HTTP Headers**. You can pass along additional context and metadata data about the request and response. Select **Add header** to add **Header** and **Value** fields.

1. Select **Save & test** to preserve your changes.
