// app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudanteModule } from './estudante/estudante.module';
import { BolsaModule } from './bolsa/bolsa.module';

@Module({
  imports: [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    ConfigModule.forRoot({ isGlobal: true }), // ← lê o .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: true,
      ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEUDCCArigAwIBAgIUEQJ0lpMIcGfYcEAMyUJ7pZkjkG4wDQYJKoZIhvcNAQEM
BQAwQDE+MDwGA1UEAww1NjBhZjMwNjctYWEyMC00Y2IxLTlmZWYtNTczMDI3YTJm
NTY1IEdFTiAxIFByb2plY3QgQ0EwHhcNMjYwMTE2MTMyNzM4WhcNMzYwMTE0MTMy
NzM4WjBAMT4wPAYDVQQDDDU2MGFmMzA2Ny1hYTIwLTRjYjEtOWZlZi01NzMwMjdh
MmY1NjUgR0VOIDEgUHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCC
AYoCggGBAMXhZkyJoP0dZim7hangvx0RWFp3nGHRaqzJbOPE2F4uy6LdyE+nCvR+
hzi1id5t9+vGikB42EdqXshjj1xcx/xeLqIlsxajANPpGqovW0O3YE50W4ATu2OJ
kfh65U+HWrJ0YWlXDxfKsDYml1VxIDdAt+57E506+qV+t9yvupLhoW3Bls7LlCsX
XDgnzap0nlSq3nTLL7W7yagBrQICQYOvoOIZQqfanLW6QCPvzJ3Dhkdog+9wsGDW
xMfhz652UUm8uZfW5Yj5l+M3Njed4DsCVTY6x8gnMOW+i1/VDf3dC6gLpaB/+r8i
Q5oNJzbqEts1RB9/8q3tKPaQVVW5XmQUwfzD6XoVwi564mVKLBEx/Q9hEmqUwkyh
oSlcDvVNEn+646CpeFnxVotmgH3mXdC6pNoa11bJRltREXLRXa0Ytg7BEupCx3tk
sk1Bi6I8hg+dh3G9REdRjw6dc/dZgnpK1DsbGVOxLCAo9EcITLa5TAzMq6/t/y6y
LJrn4vNg9QIDAQABo0IwQDAdBgNVHQ4EFgQUx/L1TJaZcMnw9NYe5vGGdtVsCxkw
EgYDVR0TAQH/BAgwBgEB/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQAD
ggGBAAfduWFH1R/hpI5ezY0y+qinvvEtmULIL7eBxloYjbzt/BZPGn/j+qvc9+y6
/Kk194/veNai8NV83x6/mCUFPREGHn7ZwR7IZCe/DcmZdLxUqvr0yIxWEoyO35iA
kKJ3avXaiXlN2a518BvBhGtyArOVDiAY9o9ztGTiM7xbZtbnQZb5oH9/HEb4Touf
iAeuE7XpA7/hcQMBOhresaOlDinkWUMih2kdhVSzI+aePyu1XgZ5Rpqw2EsiU0IW
CWi/w4ynuk5RgG9G3Q9iNqNtVwPTNZA39Tw9lAA/dr+xegcZ7dch3ouzDb8WcHq9
2ldeKtHAsjL5UoiGrgVyM/mkBBOMgFVE7Ap5BrPLLUBYh8Lt12HepTNtbjGS0ZJ3
7yHX2Xic5Ja0ovC5auVrQEOsQ3nxln/SeVjr00Z9ye51NM8FX0mC78d7RFhhBlFd
NXaKUGBIXzKuJBmkT3VWHMDkwq3ehyYF78vWoSjQs8hfhz9Zv/ADmvSE0Ojk3Chq
1vIASg==
-----END CERTIFICATE-----
`,
      },
    }),
    EstudanteModule,
    BolsaModule,
  ],
})
export class AppModule {}
