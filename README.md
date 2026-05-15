
---

# ⚙️ Setup Instructions

## 1. Install dependencies

```bash
pnpm install
```

---

## 2. Environment variables

Create a `.env` file:

```env id="be3"
DATABASE_URL="file:./dev.db"
PORT=3001
```

---

## 3. Prisma setup

```bash id="be4"
pnpm prisma generate
pnpm prisma migrate dev --name init
pnpm prisma db seed
```

---

## 4. Start development server

```bash id="be5"
pnpm run start:dev
```

---

# 🌐 API Endpoint

```text id="be6"
http://localhost:3000/graphql
```

---

# 📊 Features

## Characters API

- Fetch all characters
- Filter by status
- Filter by gender
- Search by name and description

---

# 🔎 GraphQL Queries

## Get all characters

```graphql id="be7"
query {
  characters {
    id
    name
    image
    status
    gender
    description
  }
}
```

---

## Filter characters

```graphql id="be8"
query {
  characters(
    filters: {
      status: ALIVE
      gender: MALE
      search: "rick"
    }
  ) {
    id
    name
  }
}
```

---

# 🧠 Filtering Logic

All filtering is handled on the backend using Prisma:

- `status` → exact match
- `gender` → exact match
- `search` → partial match on:
  - name
  - description

---

# 🌱 Database Schema

```prisma id="be9"
model Character {
  id          Int      @id @default(autoincrement())
  name        String
  image       String
  status      CharacterStatus
  gender      CharacterGender
  description String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

---

# 🧪 Testing

## 1. GraphQL Playground

```
http://localhost:3001/graphql
```

## 2. Prisma Studio

```bash id="be10"
pnpm prisma studio
```

---

# 🚀 Future Improvements

- Pagination (skip/take or cursor-based)
- Sorting (A-Z, newest)
- Authentication (JWT)
- Caching (Redis)
- Unit & E2E tests
- Docker support

---

# 🧑‍💻 Author

Backend built with NestJS + GraphQL + Prisma ORM as a full-stack technical task.

---