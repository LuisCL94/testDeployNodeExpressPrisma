-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "books"("name");

-- CreateIndex
CREATE UNIQUE INDEX "books_description_key" ON "books"("description");
